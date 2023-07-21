

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const CHANNELTABLE = process.env.CHANNELTABLE;

const resolvers = {
    Query: {
        listChannelsBySender: (event) => {
        return listChannelsBySender(event);
      },
    },
  };

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const typeHandler = resolvers[event.typeName];
    if (typeHandler) {
        const resolver = typeHandler[event.fieldName];
        if (resolver) {
        return await resolver(event);
        }
    }
    throw new Error("Resolver not found.");
    // return {
    //     statusCode: 200,
    // //  Uncomment below to enable CORS requests
    // //  headers: {
    // //      "Access-Control-Allow-Origin": "*",
    // //      "Access-Control-Allow-Headers": "*"
    // //  },
    //     body: JSON.stringify('Hello from Lambda!'),
    // };
};

async function listChannelsBySender(event) {

    // var params = {
    //     TableName: CHANNELTABLE,
    //     KeyConditionExpression: "postID = :postId",
    //     ExpressionAttributeValues: { ":postId": postId },
    //   };
    //   try {
    //     const data = await docClient.query(params).promise();
    //     return data.Items;
    //   } catch (err) {
    //     return err;
    //   }

    return [{
        channel_id: "randome channel id",
        profiles: [{
            id: event.arguments.profileId ?? "not found",
            first_name: "hello",
            last_name: "what",
            email: "email",
            accepting: false
        }],
        messages: []
            }]
}