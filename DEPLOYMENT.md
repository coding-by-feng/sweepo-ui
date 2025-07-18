# Sweepo UI - Docker Deployment Guide

This guide provides instructions for deploying the Sweepo UI React application using Docker and nginx.

## Prerequisites

- Docker installed and running
- Node.js and npm installed
- Git (to clone the repository)

## Quick Deployment

1. **Clone the repository:**
   ```bash
   git clone https://github.com/coding-by-feng/sweepo-ui.git
   cd sweepo-ui
   ```

2. **Run the deployment script:**
   ```bash
   ./deploy.sh
   ```

That's it! The script will automatically:
- Install npm dependencies
- Build the React application
- Create a Docker image with nginx
- Start a container on port 1968

## Access the Application

Once deployed, access your application at:
- **URL:** http://localhost:1968

## Docker Commands

### Container Management
```bash
# Stop the container
docker stop sweepo-ui

# Start the container
docker start sweepo-ui

# Restart the container
docker restart sweepo-ui

# Remove the container
docker rm sweepo-ui

# View container logs
docker logs sweepo-ui

# View real-time logs
docker logs -f sweepo-ui
```

### Image Management
```bash
# List images
docker images

# Remove the image
docker rmi sweepo-ui:latest

# Rebuild image (after code changes)
docker build -t sweepo-ui:latest .
```

## Configuration

### Port Configuration
To change the port, edit the `PORT` variable in `deploy.sh`:
```bash
PORT=1968  # Change this to your desired port
```

### Nginx Configuration
The nginx configuration is in `nginx.conf`. Key features:
- Gzip compression enabled
- Security headers configured
- Client-side routing support (React Router)
- Static asset caching
- Health check endpoint at `/health`

## Troubleshooting

### Container Won't Start
1. Check if port 1968 is already in use:
   ```bash
   netstat -tulpn | grep 1968
   ```

2. View container logs:
   ```bash
   docker logs sweepo-ui
   ```

### Build Failures
1. Ensure Node.js and npm are installed
2. Check if all dependencies are available
3. Verify Docker daemon is running

### Permission Issues
If you encounter permission issues, ensure the deploy script is executable:
```bash
chmod +x deploy.sh
```

## Development vs Production

This deployment is optimized for local development and testing. For production deployment, consider:
- Using environment-specific configurations
- Setting up SSL/TLS certificates
- Implementing proper logging and monitoring
- Using Docker Compose for multi-service setups
- Setting up reverse proxy (if needed)

## File Structure

```
sweepo-ui/
├── deploy.sh          # Main deployment script
├── Dockerfile         # Docker image configuration
├── nginx.conf         # Nginx server configuration
├── .dockerignore      # Docker build ignore patterns
├── DEPLOYMENT.md      # This file
└── ...               # React application files
```

## Support

For issues or questions regarding deployment, please check:
1. Container logs: `docker logs sweepo-ui`
2. Nginx access logs: `docker exec sweepo-ui cat /var/log/nginx/access.log`
3. Nginx error logs: `docker exec sweepo-ui cat /var/log/nginx/error.log`
