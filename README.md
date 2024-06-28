# Metro-Stay | Modern &mdash; Booking

> Under Dev

<br>

<hr>

## Environment Variables

Environment variables are used to configure the application. Below is a list of the environment variables required by this project:

- `VITE_API_KEY`: The API key for the backend server.
- `VITE_BASE_URL`: The base URL for the API.
- `VITE_IS_PRODUCTION`: String which contains 'true' or 'false'. Denotes the working environment
- `VITE_STORAGE_PATH`: Cloud object storage path
- `VITE_API_PAGE_SIZE`: Must be number which describes number of records to be fetched in single API call

### Setting Up Environment Variables

**Create a `.env` file in the root of your project**: This file should not be committed to source control as it contains sensitive information.

Here is an example of what your `.env` file might look like:

```bash
# .env
VITE_API_KEY=https://api.example.com
VITE_BASE_URL=https://www.some-server.com/
VITE_IS_PRODUCTION=false
VITE_STORAGE_PATH=<storage-path>
VITE_API_PAGE_SIZE=5
```
