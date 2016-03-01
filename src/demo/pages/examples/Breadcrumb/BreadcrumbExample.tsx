import * as React from 'react';
import Breadcrumb from '../../../../components/Breadcrumb/index';
import Link from '../../../../components/Link/index';
import ExampleCard from '../../../components/ExampleCard/index';
import PropertiesTable from '../../../components/PropertiesTable/index';

export default class BreadcrumbExample extends React.Component<any, any> {
  public render() {
    return (
      <div className='BreadcrumbExample'>
        <h1 className='ms-font-xxl'>Breadcrumb</h1>
        <div><Link target='_blank' text='Breadcrumbs' url='http://dev.office.com/fabric/components/breadcrumb' /> are used to represent a given path.</div>

        <PropertiesTable properties={ [] } />

        <h2 className='ms-font-xl'>Examples</h2>

        <ExampleCard title='Simple breadcrumb'>
          <Breadcrumb />
        </ExampleCard>

      </div>
    );
  }

}