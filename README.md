
## message

constructor for the low latency messaging platform, providing developers with a set of functions to write elegant functions for managing a dialogue

Incorporates state machines and pure functions to enable richly composed interactions with virtual agents.

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
