const AWS = require('aws-sdk')

class DynamoDBClient {
  constructor(tableName) {
    // const endpoint = process.env.DYNAMODB_ENDPOINT;
    // const config = endpoint !== "" ? { endpoint } : { region: 'ap-northeast-1' };
    // const config = 'http://localhost:8000'
    // AWS.config.endpoint = new AWS.Endpoint('http://localhost:8000');

    // this.documentClient =  new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });
    // this.documentClient= new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });


    AWS.config.update({
      region: "ap-northeast-1",
      // endpoint: "http://localhost:8000"
      endpoint: "http://0.0.0.0:8000"
    });
    this.documentClient = new AWS.DynamoDB.DocumentClient();
    

    this.tableName = 'Task';
  }

  scan() {
    return this.documentClient.scan({ TableName: this.tableName }).promise();
  }

  put(itemParams) {
    const dbParams = {
      TableName: this.tableName,
      Item: itemParams,
    }

    return this.documentClient.put(dbParams).promise();
  }
}

exports.DynamoDBClient = DynamoDBClient;

// aws dynamodb get-item --table-name Task --key '{"Id":{"N":"10"}}' --endpoint-url http://localhost:8000

