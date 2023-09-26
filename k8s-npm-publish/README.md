# How to publish and use the module

For publishing, run the publishing script:

```
npm run publish-custom
```

Then, install the published module and run it

```
npm install @sap-opps/odata-sdk@latest
npm run execute-script
```

# Notes

The publishing script will automatically update the package patch-version. You can commit it for avoiding version conflicts by the next publication.

You can also list the available package versions by running:

```
npm show @sap-opps/odata-sdk version
```
