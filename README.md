
## message

Factory function for the low latency messaging platform from Strategic Machines, helping to connect businesses to the conversational economy. This function simplifies the development of microservices, by providing a set of functions to deliver elegant and richly composed interactions between users and virtual agents

Incorporates state machines and pure functions

## Usage

super simple to use
---
```javascript
const {machine} =    required('@xmachina/message')

machine().then((m) => {
  m.setConnection(req.conn)         // connection
  m.setModelObj(modelObject)        // initialize data object with schema model
  m.setMessage(req.body)           // update data object with message
  m.setPostdate()                  // timestamp data object
  m.setCustomer(req.customer)
  m.setConfig(req.config)
  m.findMember().then((response) => {
    // do something
    })
  })
```
## License and Use
 [LICENSE](./LICENSE.txt)

## Contributing
 [contributing](.github/CONTRIBUTING.md)

Strategic Machines labs and affiliates

connecting businesses with the conversational economy
