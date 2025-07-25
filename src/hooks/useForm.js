import { useState, useCallback } from 'react';

export const useForm = (initialValues, onSubmit) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone) => {
        // Remove spaces, dashes, parentheses, and plus signs for validation
        const cleanPhone = phone.replace(/[\s\-\(\)\+]/g, '');
        // Check if remaining characters are all digits
        const re = /^\d+$/;
        return re.test(cleanPhone) && cleanPhone.length > 0;
    };

    const validate = () => {
        const newErrors = {};

        if (!values.name?.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!values.email?.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(values.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!values.phone?.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(values.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);
        try {
            await onSubmit(values);
            setValues(initialValues); // Reset form
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Memoize the reset function to prevent infinite re-renders
    // This is the key fix - preventing the reset function from being recreated on every render
    const reset = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setIsSubmitting(false);
    }, [initialValues]);

    return {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
        reset
    };
};