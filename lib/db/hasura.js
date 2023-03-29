async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(
    "https://fitting-wildcat-56.hasura.app/v1/graphql",
    {
      method: "POST",
      headers:{
        'x-hasura-admin-secret':'5grU5RBw33aogU5QoINwuvNNAbbM4TCALgs7Y63ffwTx3EwL78Paa04s8UdlYEvk'
      },
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  );

  return await result.json();
}

const operationsDoc = `
  query MyQuery {
    users {
      id
      email
      issuer
    }
    stats {
      userId
      videoId
      favourited
    }
  }
  
  mutation MyMutation {
    __typename
  }
`;

function fetchMyQuery() {
  return fetchGraphQL(
    operationsDoc,
    "MyQuery",
    {}
  );
}

function executeMyMutation() {
  return fetchGraphQL(
    operationsDoc,
    "MyMutation",
    {}
  );
}

export async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error("Hasura Errors: ", errors);
  }

  // do something great with this precious data
  console.log("Hasura Data: ", data);
}

startFetchMyQuery();

export async function startExecuteMyMutation() {
  const { errors, data } = await executeMyMutation();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

// startExecuteMyMutation();