# what are barckend servers?

When you have to deploy it on the internet, there are a few ways - 
- 1. Go to aws, GCP, Azure, Cloudflare
- 2. Rent a VM (Virtual Machine) and deploy your app
- 3. Put it in an Auto scaling group
- 4. Deploy it in a Kubernetes cluster
 
There are a few downsides to doing this - 
- Taking care of how/when to scale 
- Base cost even if no one is visiting your website
- Monitoring various servers to make sure no server is down
 
What if, you could just write the code and someone else could take care of all of these problems?

"Serverless" is a backend deployment in which the cloud provider dynamically manages the allocation and provisioning of servers. The term "serverless" doesn't mean there are no servers involved. Instead, it means that developers and operators do not have to worry about the servers.

>Problems with this approach
- More expensive at scale
- Cold start problem

---

# Famous serverless providers

- AWS Lambda
- Google Cloud Functions
- Cloudflare Workers

---

# Connecting to DB

Serverless environments have one big problem when dealing with databases. 
- There can be many connections open to the DB since there can be multiple workers open in various regions
- Prisma the library has dependencies that the cloudflare runtime doesn’t understand.