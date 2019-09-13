const AWS = require('aws-sdk')

class DynamoDBClient {
  constructor(tableName) {
    // const endpoint = process.env.DYNAMODB_ENDPOINT;
    // const config = endpoint !== "" ? { endpoint } : { region: 'ap-northeast-1' };
    // const config = 'http://localhost:8000'
    // AWS.config.endpoint = new AWS.Endpoint('http://localhost:8000');
    // this.documentClient =  new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });
    // this.documentClient= new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });
    this.tableName = 'Task';
  }

  async scan() {
    const options = {
      // region: process.env.AWS_REGION,
      // endpoint: "http://dynamodb:8000",
      // endpoint: "http://dynamodblocal:8000",
      // endpoint: "http://0.0.0.0:8000",
      // endpoint: "http://127.0.0.1:8000",
      // endpoint: 'http://localhost:8000',
      // endpoint: "http://localhost:4569",
      
      endpoint: "http://host.docker.internal:4569",
      region: 'ap-northeast-1',
      // accessKeyId: 'dummy',
      // secretAccessKey: 'dummy'
    }

    const dynamoDB = new AWS.DynamoDB(options);

    const params = {
      TableName: 'Task',
    };
    const x = await dynamoDB.scan(params).promise()
    console.log('--------------------')
    console.log(x)
    console.log('--------------------')

    // await docClient.listTables(function(err, data) {
    //   if (err) {
    //     console.log("Error: ", err.code);
    //   } else {
    //     console.log("Table names are: ", data.TableNames);
    //   }
    // }).promise()

    // const params = {
    //   TableName: 'Task',
    //   Key:{
    //        id: 10
    //   }
    // };
  
    // const dynamoParams = {
    //   TableName: 'Task',
    //   // Item: {
    //     // sampleId: {
    //     //   S: sampleId
    //     // }
    //   // }
    // }

    // const x = await docClient.getItem(dynamoParams).promise()
  
    // console.log('--------------------')
    // console.log(x)
    // console.log('--------------------')
  
    // const z = await docClient.get(params, (x, y) => {
    // }).promise()

    // z.then(r => {
    //   console.log('--------------------')
    //   console.log(r)
    //   console.log('--------------------')
    // }).catch(e => {
    //   console.log('--------------------')
    //   console.log(e)
    //   console.log('--------------------')
    // })

    // const params = {
    //   TableName: 'Task',
    //   Key:{
    //        id: 10
    //   }
    // };
  
    // await docClient.get(params, function(err, data){
    //     console.log('--------------------')
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log(data);
    //     }
    //     console.log('--------------------')
    // })

  
    // return this.documentClient.scan({ TableName: this.tableName }).promise();

    // await this.documentClient.scan({
    //   TableName: 'Task'
    // }, (e, d) => {
    //   console.log({e})
    //   console.log({d})
    // }).promise()

    // console.log('--------------------')
    
    // console.log(process.env.AWS_SAM_LOCAL)

    // await this.documentClient.listTables({}, (err, data) => {
    //   if (err) console.log(err, err.stack)
    //   else console.log(data)
    // }).promise()
    // console.log('--------------------')

    // const p = {
    //   TableName: 'Task',
    //   Key: {"Id":{"N":"10"}}
    // }
    
    // await this.documentClient.getItem(p, (x, y) => {
    //   console.log('--------------------')
    //   console.log(x)
    //   console.log({y})
    //   console.log('--------------------')
    // }).promise()

    return 'ok'
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
// npx dynamodb-adminnpx: 88個のパッケージを6.269秒でインストールしました。

// aws dynamodb list-tables --endpoint-url http://localhost:4569 --profile localstack
// aws dynamodb create-table --cli-input-json file://hello-world/schema/task.json --endpoint-url http://localhost:4569
// aws dynamodb get-item --table-name Task --key '{"Id":{"N":"10"}}' --endpoint-url http://localhost:4569

// aws dynamodb get-item --table-name Task --key '{"Id":{"N":"10"}}' --endpoint-url http://localhost:4569
// aws dynamodb put-item --table-name Task --item '{ "Id": {"N":"10"} }' --endpoint-url http://localhost:4569
// aws dynamodb scan --table-name Task --endpoint-url http://localhost:4569
// aws dynamodb list-tables --endpoint-url http://localhost:4569

// https://www.wakuwakubank.com/posts/675-aws-cli-dynamodb/

// aws dynamodb put-item --table-name users --item '{ "Id": { "N": "1" }, "post_id": { "N": "2" }, "created_at": { "S": "1544741492" }, "message": { "S": "aaaaaaaaaaaaaa" } }'
    // ➜ curl http://127.0.0.1:3000/koa/dynamo_db
