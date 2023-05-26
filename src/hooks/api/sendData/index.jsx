import { load } from "../../../storage";
import { useState } from "react";

export default function useSendData() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const loggedInUser = load("user");

  async function sendData(data, url, method) {
    var result;

    const headers = {
      "Content-Type": "application/json",
    };

    if (loggedInUser && loggedInUser.accessToken) {
      headers["Authorization"] = `Bearer ${loggedInUser.accessToken}`;
    }

    const options = {
      headers,
      method: method.toUpperCase(),
      body: JSON.stringify(data),
    };

    try {
      setIsLoading(true);
      setIsError(false);

      const response = await fetch(url, options);

      result = await response.json();
    } catch (error) {
      setIsError(true);
      console.log({ error: true, message: error.message });
    } finally {
      setIsLoading(false);
    }

    return result;
  }

  return { sendData, isLoading, isError };
}
