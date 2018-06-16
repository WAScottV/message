
## message

Factory function for the low latency messaging platform from Strategic Machines, helping to connect businesses to the conversational economy. This function simplifies the development of microservices, by providing a set of functions to deliver elegant and richly composed interactions between users and virtual agents

Incorporates state machines and pure functions

## Background and Context

Strategic Machines is dedicated to helping businesses engage in the conversational economy. We recognize that creating apps which interact 'intelligently' with trading partners and employees is a challenge on a number of fronts. Our approach is to use 'common technologies' and 'common frameworks' with some assistance from ai and ml when needed -- rather the reinventing everything in order to address the unique use cases of effective customer interactions. By embracing open standards and leveraging 'common technologies' in our quest to deliver winsome and clever interactions for our customers, we hope to deliver increasing economic returns for businesses everywhere!

Microservices are the core of an Agent's 'intelligent interaction' at Strategic Machines. The design of Strategic Machines is to integrate the use NLO, NLU, NLG and Machine Learning with pure functions (microservices) -- reducing complexity, cost and cycle time to build, test and deploy winsome virtual Agents for companies. The architecture of the Machines platform presumes a separation of concerns between important entities involved in the composition of cognitive apps:

> platform services- The messaging platform is a low latency processing platform, integrating channels, state machines, and data services for every message received before trigger web actions (microservices) for response processing
> ai services - the platform leverages ai engines for intent, entity identification and other cognitive services as required
> microservices - pure functions which parse data objects and compose responses with precision and speed


## Usage

super simple to use
---
```javascript
const {createMachine} =    required('@xmachina/message')    // install the factory function

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
