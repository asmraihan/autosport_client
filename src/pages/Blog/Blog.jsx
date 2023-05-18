import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('Blog')
    return (
        <div>
        <section className="bg-zinc-800">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white">
              Frequently asked questions
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
                🔴 What is JWT? JWT stands for “ JSON web token ” it is an open
                  standard (RFC 7519) that defines a compact and self-contained way
                  for securely transmitting information between parties as a JSON
                  object. JWT is simply a token that is written in JSON format. It is
                  really safe to use because it can be signed in using a secret (with
                  the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                  🔴How does JWT work? JWT contains 3 parts 1) The header 2) The
                  payload 3) The signature image The header of the JWT token is just
                  some metadata for the token such as the algorithm name and type.
                  image The payload is some data that you can encode into the jwt
                  which will be saved in the token payload and later you can use those
                  unique data to identify the specific user. The more data you add the
                  bigger the jwt token will be.
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
                  🔴 What is JWT? JWT stands for “ JSON web token ” it is an open
                  standard (RFC 7519) that defines a compact and self-contained way
                  for securely transmitting information between parties as a JSON
                  object. JWT is simply a token that is written in JSON format. It is
                  really safe to use because it can be signed in using a secret (with
                  the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                  🔴How does JWT work? JWT contains 3 parts 1) The header 2) The
                  payload 3) The signature image The header of the JWT token is just
                  some metadata for the token such as the algorithm name and type.
                  image The payload is some data that you can encode into the jwt
                  which will be saved in the token payload and later you can use those
                  unique data to identify the specific user. The more data you add the
                  bigger the jwt token will be.
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
                🔴 What is JWT? JWT stands for “ JSON web token ” it is an open
                  standard (RFC 7519) that defines a compact and self-contained way
                  for securely transmitting information between parties as a JSON
                  object. JWT is simply a token that is written in JSON format. It is
                  really safe to use because it can be signed in using a secret (with
                  the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                  🔴How does JWT work? JWT contains 3 parts 1) The header 2) The
                  payload 3) The signature image The header of the JWT token is just
                  some metadata for the token such as the algorithm name and type.
                  image The payload is some data that you can encode into the jwt
                  which will be saved in the token payload and later you can use those
                  unique data to identify the specific user. The more data you add the
                  bigger the jwt token will be.
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
                🔴 What is JWT? JWT stands for “ JSON web token ” it is an open
                  standard (RFC 7519) that defines a compact and self-contained way
                  for securely transmitting information between parties as a JSON
                  object. JWT is simply a token that is written in JSON format. It is
                  really safe to use because it can be signed in using a secret (with
                  the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                  🔴How does JWT work? JWT contains 3 parts 1) The header 2) The
                  payload 3) The signature image The header of the JWT token is just
                  some metadata for the token such as the algorithm name and type.
                  image The payload is some data that you can encode into the jwt
                  which will be saved in the token payload and later you can use those
                  unique data to identify the specific user. The more data you add the
                  bigger the jwt token will be.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    );
};

export default Blog;