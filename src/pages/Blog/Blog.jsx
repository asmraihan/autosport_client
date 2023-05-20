import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('Blog')
  return (

    <section data-aos="fade-up" className="bg-zinc-800">
      <div className="py-8 px-8 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-2xl lg:text-4xl tracking-tight font-extrabold text-white">
          Question & Answer Section
        </h2>
        <div className="grid pt-8 text-left border-t md:gap-16 border-gray-700 md:grid-cols-2">

          <div className="mb-10">
            <h3 className="flex items-start mb-4 text-lg font-medium  text-white">
              <svg
                className="flex-shrink-0 mt-1 mr-2 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </h3>
            <p className="text-gray-400">
              🔴An access token and a refresh token are both used in authentication and authorization systems, typically in the context of web applications and APIs.
              Access Token: An access token is a credential that is used to access protected resources, such as APIs or web services.
              Refresh Token: A refresh token is a credential that is used to obtain a new access token without requiring the user or application to reauthenticate.
              <br />
              🔴 Access tokens are short-lived and used in requests to access resources, while refresh tokens are long-lived and used to acquire new access tokens when they expire.

              Access Token Storage: One common approach is to store the access token in memory or a short-lived storage mechanism (e.g., in a memory variable) during the client's session. This ensures that the access token is only available as long as the user is actively using the application.

              Refresh Token Storage: The recommended approach is to store refresh tokens in a secure HTTP-only cookie or local storage mechanism provided by the client's environment. This helps protect the refresh token from being accessed by malicious JavaScript code and reduces the risk of cross-site scripting (XSS) attacks.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Compare SQL and NoSQL databases?
            </h3>
            <p className="text-gray-400">
              🔴 SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
              <br />
              🔴 Here's a comparison between SQL and NoSQL databases:
              <br />
              Data Model: <br />
              SQL databases use a structured data model based on tables with predefined schemas. They enforce a rigid structure with fixed columns and data types.
              NoSQL databases offer a flexible data model that can be document-based, key-value pairs, columnar, or graph-oriented.
              <br />
              Schema: <br />
              SQL databases require a predefined schema that specifies the structure of the data in advance.

              NoSQL databases are schema-less or schema-flexible, enabling easier handling of dynamic and evolving data structures. <br />
              Scalability: <br />
              SQL databases traditionally scale vertically, meaning they are optimized for running on a single server with increased hardware resources.
              NoSQL databases are designed for horizontal scalability. They can distribute data across multiple servers and handle large-scale applications with ease.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              What is express js? What is Nest JS?
            </h3>
            <p className="text-gray-400">
              🔴 Express.js:

              Express.js is a lightweight and flexible web application framework for Node.js. It provides a simple and minimalistic approach to building web applications and APIs.
              It offers a set of functions and middleware that help handle HTTP requests, routing, middleware integration, and template rendering.
              It has a large and active community, along with a wide range of third-party middleware and plugins available.
              Express.js is well-suited for building small to medium-sized applications and APIs that require simplicity, speed, and customization. <br />
              🔴Nest.js:
              Nest.js is a progressive, opinionated, and full-featured framework for building scalable and maintainable server-side applications.
              It provides a structured architecture inspired by Angular, leveraging decorators, modules, dependency injection, and a powerful CLI.
              Nest.js supports various HTTP frameworks, including Express.js, Fastify, and more, giving developers flexibility in choosing the underlying framework.
              It includes features like dependency injection, middleware, validation, routing, database integration (ORM/ODM), websockets, testing utilities, and more out-of-the-box.
              Nest.js promotes modular and scalable application development, making it suitable for building large-scale applications with complex business logic and multiple modules/components.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium text-white">
              <svg
                className="flex-shrink-0 mr-2 w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              What is MongoDB aggregate and how does it work?
            </h3>
            <p className="text-gray-400">
              🔴 In MongoDB, the aggregate method is used to perform advanced data aggregation operations on collections. It allows you to process and transform data using a pipeline of multiple stages. The aggregate pipeline consists of one or more stages, where each stage performs a specific operation on the input documents and passes the results to the next stage.
              <br />
              🔴 Here's an overview of how the aggregate method works: <br />
              Pipeline Stages: The aggregate pipeline consists of multiple stages, each represented by an object in an array. <br />

              Input Documents: The input documents are the documents from the collection on which the aggregation is performed. These documents flow through the pipeline, being processed and transformed at each stage.

              Stage Operations: Each stage performs an operation on the input documents. Some common stage operations include:
              $match,
              $group,
              $project,
              $sort,
              $limit,
              $skip,
              $lookup,
              Output,
              Execution
              By leveraging the aggregate method and its pipeline stages, you can perform complex data aggregations, transformations, and computations directly within MongoDB, reducing the need for transferring and processing data in application code. It provides powerful capabilities for generating reports, analytics, and deriving insights from your data.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Blog;