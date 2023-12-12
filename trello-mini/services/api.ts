import axios, { AxiosResponse } from "axios";

interface Task {
  content: string;
  columnName: string;
  column: string;
}

interface ApiResponse {
  data: {
    columns: any[];
    tasks: any[];
  };
}

class ApiClient {
  private storedApiKey: string | null;

  constructor() {
    if (typeof localStorage !== "undefined") {
      this.storedApiKey = localStorage.getItem("apiKey");
    } else {
      this.storedApiKey = null;
    }
  }

  async getApiKey(email: string): Promise<string> {
    try {
      const response = await axios.get(
        `https://api-exercise-trello.vercel.app/api/v1/api-key?email=${email}`
      );

      return response.data.data.apiKey;
    } catch (error) {
      throw new Error("Failed to get API key");
    }
  }

  private getRequestHeaders(): { [key: string]: string } {
    if (!this.storedApiKey) {
      throw new Error("API key is not available");
    }

    return {
      "X-Api-Key": this.storedApiKey,
    };
  }

  async getTasks(): Promise<ApiResponse> {
    try {
      const response = await axios.get(
        "https://api-exercise-trello.vercel.app/api/v1/tasks",
        {
          headers: this.getRequestHeaders(),
        }
      );

      return response.data;
    } catch (error) {
      throw new Error("Failed to get tasks");
    }
  }

  async postTasks(tasks: Task[]): Promise<void> {
    try {
      await axios.post(
        "https://api-exercise-trello.vercel.app/api/v1/tasks",
        tasks,
        {
          headers: this.getRequestHeaders(),
        }
      );
    } catch (error) {
      throw new Error("Failed to post tasks");
    }
  }
}

export default ApiClient;
