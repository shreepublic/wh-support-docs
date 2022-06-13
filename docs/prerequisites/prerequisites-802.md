# IBM Cúram Social Program Management 8.0.2

* [Operating systems](#operating-systems)

* [Prerequisites](#prerequisites)

* [Supported software](#supported-software)

## Operating systems

* [Microsoft Windows](#microsoft-windows)

* [Linux](#linux)

### Microsoft Windows

The Microsoft Windows platform is supported for the design, development, testing and building of the application on a server.

#### Windows 11 Enterprise x86-64

|Bitness|Base|Future|
|-------|----|------|
|64-Exploit|Yes|Yes

#### Windows 11 Pro x86-64

|Bitness|Base|Future|
|-------|----|------|
|64-Exploit|Yes|Yes

#### Windows 10 Enterprise x86-64

|Bitness|Base|Anniversary Update|Creator's Update|Fall Creator's Update|April 2018 Update|1809|1903|1909|2004|20H2|21H1|21H2|Future|
|-------|----|------------------|----------------|---------------------|-----------------|----|----|----|----|----|----|----|------|
|64-Exploit|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|

#### Windows 10 Pro x86-64

|Bitness|Base|Anniversary Update|Creator's Update|Fall Creator's Update|April 2018 Update|1809|1903|1909|2004|20H2|21H1|21H2|Future|
|-------|----|------------------|----------------|---------------------|-----------------|----|----|----|----|----|----|----|------|
|64-Exploit|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|

### Linux

The Linux platform is supported for building the application on a server.

#### Red Hat Enterprise Linux (RHEL) 8 x86-64

|Bitness|Base|8.1|8.2|8.3|8.4|8.5|Future|
|-------|----|---|---|---|---|---|------|
|64-Exploit|No|No|No|Yes|Yes|Yes|Yes|

#### Red Hat Enterprise Linux (RHEL) 7 x86-64

|Bitness|Base|7.1|7.2|7.3|7.4|7.5|7.6|7.7|7.8|7.9|Future|
|-------|----|---|---|---|---|---|---|---|---|---|------|
|64-Exploit|No|No|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|Yes|


## Prerequisites

### Installation

The supported platforms for the IBM Cúram SPM installers are Linux and Windows.

|Prerequisite|Version|
|-------|----|
|IBM Runtime Environment, Java Technology Edition|8 and future fix packs|
|Oracle Java SDK/JRE/JDK|8.0 and future fix packs|


## Supported software

* [Accessibility](#accessibility)

* [Application servers](#application-servers)

* [Databases](#databases)

* [Development Tools](#development-tools)

* [Reporting and Analysis](#reporting-and-analysis)

* [Web Browser Plug-Ins](#web-browser-plug-ins)

* [Web browsers](#web-browsers)

### Accessibility

The following accessibility software is supported. 

<!--See the [Curam Social Program Management accessibility information](https://www.ibm.com/docs/en/spm/8.0.2?topic=overview-accessibility-in-social-program-management) for supported text resizing and browser zoom settings.-->

|Supported software|Version|Browser|
|------------------|-------|-------|
|Freedom Scientific JAWS screen reader|2020 and future fix packs|Microsoft Edge and [JAWS](http://www.freedomscientific.com/products/blindness/jaws) 2020 is the only certified screen reader and browser combination.|
|Apple VoiceOver|Any version and future fix packs|Google Chrome 100 and VoiceOver on iPad with iOS 15.4 is the certified combination for tablets.|


### Application Servers

For the supported operating systems and necessary configuration information for these application servers, see the [WebSphere Application Server product site](http://www.ibm.com/support/docview.wss?uid=swg27006921) or the [Oracle WebLogic Server product site](https://www.oracle.com/middleware/technologies/weblogic.html) documentation.

Container and Kubernetes platforms are not supported on these application servers.

|Supported software|Version|Details|
|------------------|-------|-------|
|Oracle WebLogic Server 12cR2|(12.2.1) and future fix packs|The JDK (Java Development Kit) is supported and is forward compatible with higher JDK versions as supported by WebLogic Server. <br />**Note:** Oracle Database is the only database that is supported for use with Oracle WebLogic Server.|
|Oracle WebLogic Server 14c|(14.1.1.0.0) and future fix packs|The JDK (Java Development Kit) version 8 (and future fix packs) is supported. <br />**Note:** Oracle Database is the only database that is supported for use with Oracle WebLogic Server.|
|WebSphere Application Server|9.0.5 and future fix packs|The JDK (Java Development Kit) version 8 (and future fix packs) supplied with the WebSphere Application Server installation is supported.|
|WebSphere Application Server Network Deployment|9.0.5 and future fix packs|The JDK (Java Development Kit) version 8 (and future fix packs) supplied with the WebSphere Application Server installation is supported.|
|WebSphere Application Server for z/OS|9.0.5 and future fix packs|The JDK (Java Development Kit) version 8 (and future fix packs) supplied with the WebSphere Application Server installation is supported.|

### Databases

For the supported operating systems and necessary configuration information for these database, see the database product documentation. 

Database-as-a-Service or Container and Kubernetes platforms are not supported on these databases.

|Supported software|Version|Details|
|------------------|-------|-------|
|Db2 Enterprise Server Edition|11.1.0 and future fix packs|Reporting: <br />- SPM Reporting and Analytics is supported on Db2 version 11.1. <br />- The SPM data warehouse can be built on this version of Db2. <br />- Reporting ETLs can be built using a technology compatible with this version of Db2.|
||11.5.5.0 and future fix packs|Reporting: <br />- SPM Reporting and Analytics is supported on Db2 version 11.5.5.0. <br />- The SPM data warehouse can be built on this version of Db2. <br />- Reporting ETLs can be built using a technology compatible with this version of Db2.|
|Db2 Workgroup Server Edition|11.1.0 and future fix packs||
|Db2 for z/OS|12.1 and future fix packs|When using SPM with Db2 for z/OS, the provided db2jcc4.jar file in the $CURAMSDEJ/drivers folder is used to access Db2 for z/OS whether access is local to z/OS or via a remote deployment. However, the level of Db2 for z/OS may have dependencies with the client JDBC driver level; therefore, see the [IBM Data Server Driver for JDBC and SQLJ versions and Db2 for z/OS APARs](https://www.ibm.com/support/pages/node/405457) page for supported Db2 and JDBC levels.|
|H2 Database|1.3.176 or future fix packs|H2 is only supported for use in the development environment to aid application design, development and testing. The supported platforms are Windows 10. H2 is not supported for use with IBM Websphere Application Server or Oracle WebLogic Server. See the H2 site for further information and technical support. |
|IBM Db2 Advanced Enterprise Server Edition|11.1.0 and future fix packs|Reporting: - SPM Reporting and Analytics is supported on Db2 version 11.1. - The SPM data warehouse can be built on this version of Db2. - Reporting ETLs can be built using a technology compatible with this version of Db2.|
||11.5.5.0 and future fix packs|Reporting: <br />- SPM Reporting and Analytics is supported on Db2 version 11.5.5.0. <br />- The SPM data warehouse can be built on this version of Db2. <br />- Reporting ETLs can be built using a technology compatible with this version of Db2.|
|IBM Db2 Standard Edition VPC Option|11.5.5.0 and future fix packs||
|Oracle Database 19c|(19.3) and future fix packs||
||(19.3) Enterprise Edition and future fix packs|Reporting: <br />- Only the Enterprise Edition of Oracle Database 19c is supported for Curam Reporting.<br />- See the [Oracle Database product site](https://www.oracle.com/database/) for certified configuration information on this product.<br />- Curam Reporting has been certified against Oracle 19c as a source database to host the Curam Application database and as a target database to host Reporting databases.|

### Development Tools

Although technical support is not provided for any Integrated Development Environment (IDE) it should be possible to use any Java IDE for development. Support for IDEs should be sought from the relevant software vendor. The following lists those IDEs which have been tested, and the use of which is described in documentation.

It should also be noted that the development of the application is restricted to the Windows platform (Windows 7 and 10) and the tools listed below have only been tested on that platform.

|Supported software|Version|Details|
|------------------|-------|-------|
|Apache Ant|1.10.6|Please note that only Apache Ant 1.10.6 is supported. Associated fix packs are not.|
|Eclipse|4.18 and future fix packs|Eclipse 4.18.0 and [higher maintenance releases](https://www.eclipse.org/downloads/packages/release/Neon/3). Servlet Containers/Application Servers: Apache Tomcat [9.0.50](https://archive.apache.org/dist/tomcat/tomcat-9/v9.0.50/), with [Eclipse Tomcat Plugin](https://sourceforge.net/projects/tomcatplugin/files/updatesite/plugins/) 9.0.1. Java SE: IBM and Oracle Java SE JDK 8.0 and [higher updates](http://www.oracle.com/technetwork/java/javase/downloads/index.html). Java EE: Oracle Java EE 6 and 7 and [higher updates](http://www.oracle.com/technetwork/java/javaee/downloads/java-archive-downloads-eesdk-419427.html). |
|Rational Software Architect Designer|9.5.0.1|Supported as a Modeling Environment. Servlet Containers/Application Servers: Apache Tomcat 9.0.50, with Eclipse Tomcat Plugin 9.0.1. Java SE: IBM and Oracle Java SE JDK 8.0 and higher updates. Java EE: Oracle Java EE 6 and 7 and higher updates.|


### Reporting and Analysis
	
BIRT (Business Intelligent and Reporting Tools) is an (Eclipse) open source component which provides a development and execution environment for Curam Business Intelligence (BI) content.

The use of a second Eclipse instance for BIRT development is recommended as standard Curam development often requires an Eclipse version that is not compatible with the certified BIRT development environment.

See the Development Environment Installation Guide and the BIRT Developer Guide  provide a full explanation.

Curam uses the all-in-one installation. For more information, see [BIRT versions and platform support](https://download.eclipse.org/birt/downloads/drops/).

|Supported software|Version|Details|
|------------------|-------|-------|
|Apache Ant|1.10.6|Please note that only Apache Ant 1.10.6 is supported. Associated fix packs are not.|


### Web Browser Plug-Ins

|Supported software|Version|Details|
|------------------|-------|-------|
|Microsoft Word|2013 and future fix packs|Required for creating and editing Curam communication documents in Microsoft Word format. |
||2016 and future fix packs||
||2019 and future fix packs||
|Oracle Java SDK/JRE/JDK|8.0 and future fix packs|Oracle JRE 8.0 is required for Microsoft Word Integration. JRE 8.0 - the most recently released version tested is JRE 1.8 u331. Available as a free download from the [Oracle Java downloads page](https://www.oracle.com/java/technologies/downloads/here). |

### Web browsers

The minimum recommended resolution is 1366x768. The optimum DPI setting is Normal size.

Chrome, Firefox, Edge, and Safari release new versions frequently and install updates automatically by default. IBM Curam Social Program Management releases (V.R.M.F releases only) are generally tested on the latest version (for Chrome and Edge, stable releases only) of these browsers available at the start of the development cycle; if tested with no issues IBM will certify that version. The pre-requisites advise the version that is certified at each new product release. If for any reason, IBM Curam Social Program Management are unable to certify for that version, it may be necessary to revert back to a version that is previously fully certified. While IBM will support customers on newer versions of these browsers than the last certified version, they should understand that they have not been fully tested.

#### Standard desktop browser support

While every effort is made to ensure that internal case worker application pages use standard web technologies and formats that are compatible with all browsers, only the specified browsers are officially supported.

#### Universal Access desktop browser support

Universal Access has been specifically developed for public facing applications so browser support has been extended in this area. While every effort is made to ensure that the classic Universal Access application uses standard web technologies and formats that are compatible with all browsers, the browsers, only the specified browsers are officially supported. For information about browser support for the Universal Access Responsive Web Application, see [Prerequisites and supported software](https://www.ibm.com/docs/en/spm/8.0.2?topic=server-prerequisites-supported-software).

|Supported software|Version|Details|
|------------------|-------|-------|
|Apple Safari|15 and future fix packs|This browser is supported only for the Universal Access application.|
|Google Chrome|100 and future fix packs|This browser is supported for both the Universal Access and Case Worker applications. Microsoft Word Integration  and Arabic (RTL) are supported for this browser in the Case Worker application.|
|Microsoft Edge|100 and future fix packs|This browser is supported only for the Universal Access application.|
|Mozilla Firefox|99 and future fix packs|This browser is supported for both the Universal Access and Case Worker applications. Microsoft Word Integration  and Arabic (RTL) are supported for this browser in the Case Worker application.|

#### Tablet browser support

Google Chrome 100 and future fix packs are supported for tablet devices.
