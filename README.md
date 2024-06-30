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

<br>

<hr>

## Contributing

We welcome contributions from the community! If you would like to contribute to this project, please follow these guidelines.

### How to Contribute

1. **Fork the repository**: Click on the "Fork" button at the top right corner of this repository to create your own copy of the project.

2. **Clone the repository**: Use the following command to clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

3. **Create a new branch**: Create a new branch for your feature or bug fix using the following command:

   ```bash
   git checkout -b feature-or-bugfix-name
   ```

4. **Make your changes**: Implement your feature or bug fix.

5. **Commit your changes**: Commit your changes with a clear and concise commit message:

   ```bash
   git commit -m "Description of your changes"
   ```

6. **Push to your branch**: Push your changes to your forked repository:

   ```bash
   git push origin feature-or-bugfix-name
   ```

7. **Submit a pull request**: Go to the original repository and create a pull request. Provide a detailed description of your changes and any relevant information.

### Code Style

Please follow the code style used in the project. This helps keep the codebase clean and readable. If the project uses a linter or formatter, make sure to run it before submitting your pull request.

### Reporting Issues

If you find a bug or have a feature request, please open an issue in the repository. Provide as much detail as possible to help us understand and address the issue.

### Getting Help

If you need help or have any questions, feel free to reach out by opening an issue or contacting the maintainers.

### Acknowledgements

Thank you for your interest in contributing to our project! Your contributions are greatly appreciated.

---

Feel free to customize this section to better fit the specific requirements and guidelines of your project.
