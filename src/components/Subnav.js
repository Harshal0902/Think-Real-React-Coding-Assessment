import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CreateTable from './CreateTable';
import CreateJson from './CreateJson';

const Subnav = () => {
    return (
        <div className='px-44 pt-12'>
            <Tabs>
                <TabList className="flex flex-row space-x-4 text-xl font-semibold">
                    <Tab>Params</Tab>
                    <Tab>Header</Tab>
                    <Tab>Body</Tab>
                </TabList>

                <TabPanel>
                    <h1 className='text-xl p-3'>Query Params</h1>
                    <CreateTable />
                </TabPanel>
                <TabPanel>
                    <h1 className='text-xl p-3'>Header</h1>
                    <CreateTable />
                </TabPanel>
                <TabPanel>
                    <h1 className='text-xl p-3'>JSON</h1>
                    <CreateJson />
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Subnav