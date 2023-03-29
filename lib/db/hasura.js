async function queryHasuraGQL(operationsDoc, operationName, variables) {
  const result = await fetch(
    process.env.NEXT_PUBLIC_HASURA_ADMIN_URL,
    {
      method: "POST",
      headers:{
        'x-hasura-admin-secret':process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
        // "content-type":"application/json"
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
  return queryHasuraGQL(
    operationsDoc,
    "MyQuery",
    {}
  );
}

function executeMyMutation() {
  return queryHasuraGQL(
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