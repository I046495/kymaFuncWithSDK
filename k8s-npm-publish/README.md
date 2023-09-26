# How to publish and use the module

First, assign your npm registry account to your local user.
For that, you can run the following command:

```
npm adduser

# Note: As standard, the npm registry will be used. You can configure a custom registry in the ~/.npmrc file. But remember: In that case, you should assure that you have write access.

```

For publishing, navigate into the target module and run the publishing script:

```
# In the 'k8s-npm-publish/OData' folder
npm run publish-custom
```

For testing the published module, install it and run it using some script.

```
# In the 'k8s-npm-publish' folder
npm install @sap-opps/odata-sdk@latest
npm run execute-script
```

# Notes

The publishing script will automatically update the package patch-version. You can commit it for avoiding version conflicts by the next publication.

You can also list the available package versions by running:

```
npm show @sap-opps/odata-sdk version
```
