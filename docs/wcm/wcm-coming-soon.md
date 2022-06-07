# Coming Soon in IBM Watson Care Manager

## Flashes (Alerts)

Read about new features and changes that are coming soon in your next update of IBM® Watson™ Care Manager.

* [Introduction](#introduction)

* [Coming soon for assessments](#coming-soon-for-assessments)

* [Coming soon for reporting](#coming-soon-for-reporting)

## Introduction

To help you to prepare for upcoming releases, we are excited to give you a preview of what is coming soon in Watson Care Manager.

When configuring assessments, you will be able to reuse questions across assessment measures and apply unique scoring to a question dependent on the measure it is associated with.

Previously, Cognos was used to run reports. Now, in addition to Cognos, WCM Reporting is introducing a bring-your-own-tool (BYOT) solution which will allow you to use your chosen Business Intelligence (BI) tooling.

To watch a video that highlights the enhancements that are coming soon, see our [June Show and Tell video](https://www.ibm.com/support/pages/node/6343209).

## Coming soon for assessments

It will now be possible to configure complex assessments like the MAYSI-2 or SDM Child Welfare assessments that reuse questions across assessment measures and that may require unique scoring to be applied to a question dependent on the measure it is associated with. When you configure an assessment with multiple measures, you must create one or more clusters of questions for scoring purposes. It wasn't possible to associate a single cluster of questions with more than one measure, now it will be. You will be able to associate a cluster of questions with more than one measure and apply unique scoring to a question within a cluster at each individual measure level.

## Coming soon for reporting

### Bring your own tool

In this release WCM Reporting is introducing a Bring-Your-Own-Tool (BYOT) solution which will allow you to view your Watson Care Manager transactional data in your local Business Intelligence (BI) tooling. This solution gives you the flexibility to choose a Business Intelligence (BI) tool that suits the needs of your organization and choose which data to make available in that tool to use for reporting. You can access the WCM reporting warehouse using tools like Azure Power BI ,Jasper Soft, Cognos or BIRT. There will be three integration methods available to wire your reporting tool to the WCM reporting warehouse and retrieve the data you are interested in reporting on for use in your chosen BI tool.

* Direct BI tool connection. Your BI tool reads directly from WCM reporting data.
* Federated Customer. Your BI tool reads from your own data warehouse federated to WCM reporting data warehouse.
* Data download. You create a program to copy data into your data warehouse from WCM reporting data warehouse.

The documentation contains evaluation criteria that can help you determine which integration method would work best for your organization.

To see the views available as part of this release, see the [Watson Care Manager reporting data catalog](https://ibm.github.io/wcm-reporting-datacatalog/#/).
