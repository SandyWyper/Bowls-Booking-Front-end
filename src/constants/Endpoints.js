// Any uri's with a slash at the end need either a slot of user id appended

export const Endpoints = {
  user: {
    create: {
      uri: "https://fg75c1vqpf.execute-api.eu-west-1.amazonaws.com/dev/users",
      method: "POST",
    },
    delete: {
      uri: "https://fg75c1vqpf.execute-api.eu-west-1.amazonaws.com/dev/users/",
      method: "DELETE",
    },
    get: {
      uri: "https://fg75c1vqpf.execute-api.eu-west-1.amazonaws.com/dev/users/",
      method: "GET",
    },
    getAll: {
      uri: "https://fg75c1vqpf.execute-api.eu-west-1.amazonaws.com/dev/users",
      method: "GET",
    },
    update: {
      uri: "https://fg75c1vqpf.execute-api.eu-west-1.amazonaws.com/dev/users/",
      method: "PUT",
    },
  },
  slot: {
    getAll: {
      uri: "https://fg75c1vqpf.execute-api.eu-west-1.amazonaws.com/dev/slot",
      method: "GET",
    },
    createSlot: {
      uri: "https://fg75c1vqpf.execute-api.eu-west-1.amazonaws.com/dev/slot",
      method: "POST",
    },
    deleteSlot: {
      uri: "https://fg75c1vqpf.execute-api.eu-west-1.amazonaws.com/dev/slot/",
      method: "DELETE",
    },
    book: {
      uri:
        "https://fg75c1vqpf.execute-api.eu-west-1.amazonaws.com/dev/slot/add/booking/",
      method: "POST",
    },
    removeBooking: {
      uri:
        "https://fg75c1vqpf.execute-api.eu-west-1.amazonaws.com/dev/slot/remove/booking/",
      method: "POST",
    },
  },
}
