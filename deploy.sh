#!/bin/bash

# Sweepo UI - Docker Deployment Script
# This script builds and deploys the React app to a local Docker container using nginx on port 1968

set -e  # Exit on any error

# Configuration
CONTAINER_NAME="sweepo-ui"
IMAGE_NAME="sweepo-ui:latest"
PORT=1968
BUILD_DIR="build"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
print_status "Checking prerequisites..."

if ! command_exists docker; then
    print_error "Docker is not installed or not in PATH"
    exit 1
fi

if ! command_exists node; then
    print_error "Node.js is not installed or not in PATH"
    exit 1
fi

if ! command_exists npm; then
    print_error "npm is not installed or not in PATH"
    exit 1
fi

print_success "All prerequisites are available"

# Check if Docker daemon is running
if ! docker info >/dev/null 2>&1; then
    print_error "Docker daemon is not running. Please start Docker and try again."
    exit 1
fi

print_success "Docker daemon is running"

# Stop and remove existing container if it exists
print_status "Checking for existing container..."
if docker ps -a --format 'table {{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    print_warning "Stopping and removing existing container: ${CONTAINER_NAME}"
    docker stop ${CONTAINER_NAME} >/dev/null 2>&1 || true
    docker rm ${CONTAINER_NAME} >/dev/null 2>&1 || true
    print_success "Existing container removed"
fi

# Remove existing image if it exists
if docker images --format 'table {{.Repository}}:{{.Tag}}' | grep -q "^${IMAGE_NAME}$"; then
    print_warning "Removing existing image: ${IMAGE_NAME}"
    docker rmi ${IMAGE_NAME} >/dev/null 2>&1 || true
    print_success "Existing image removed"
fi

# Install dependencies
print_status "Installing npm dependencies..."
npm install
print_success "Dependencies installed"

# Build the React application
print_status "Building React application..."
npm run build
print_success "React application built successfully"

# Check if build directory exists
if [ ! -d "${BUILD_DIR}" ]; then
    print_error "Build directory not found. Build may have failed."
    exit 1
fi

# Build Docker image
print_status "Building Docker image: ${IMAGE_NAME}"
docker build -t ${IMAGE_NAME} .
print_success "Docker image built successfully"

# Run the container
print_status "Starting Docker container: ${CONTAINER_NAME}"
docker run -d \
    --name ${CONTAINER_NAME} \
    -p ${PORT}:80 \
    --restart unless-stopped \
    ${IMAGE_NAME}

# Wait a moment for container to start
sleep 2

# Check if container is running
if docker ps --format 'table {{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    print_success "Container started successfully"
    print_success "Sweepo UI is now running at: http://localhost:${PORT}"
    print_status "Container name: ${CONTAINER_NAME}"
    print_status "Image name: ${IMAGE_NAME}"
    print_status "Port: ${PORT}"
    
    echo ""
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}  🚀 DEPLOYMENT SUCCESSFUL! 🚀${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo -e "${BLUE}Access your application at:${NC}"
    echo -e "${YELLOW}  http://localhost:${PORT}${NC}"
    echo ""
    echo -e "${BLUE}Useful commands:${NC}"
    echo -e "${YELLOW}  Stop container:    docker stop ${CONTAINER_NAME}${NC}"
    echo -e "${YELLOW}  Start container:   docker start ${CONTAINER_NAME}${NC}"
    echo -e "${YELLOW}  View logs:         docker logs ${CONTAINER_NAME}${NC}"
    echo -e "${YELLOW}  Remove container:  docker rm ${CONTAINER_NAME}${NC}"
    echo -e "${GREEN}========================================${NC}"
else
    print_error "Container failed to start"
    print_status "Checking container logs..."
    docker logs ${CONTAINER_NAME}
    exit 1
fi
