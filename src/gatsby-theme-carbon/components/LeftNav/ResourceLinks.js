import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Docs for Social Program Management',
    href: 'https://www.ibm.com/docs/en/spm/8.0.2',
  },
  {
    title: 'Docs for Watson Care Manager',
    href: 'https://www.ibm.com/docs/en/watson-care-manager',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;