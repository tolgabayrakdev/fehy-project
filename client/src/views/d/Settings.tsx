import { Button, Input, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"


type Props = {}

export default function Settings({ }: Props) {
  return (
    <div>
      <h3 className="text-lg mt-4">Update your account information.</h3>
      <hr className="mt-3 mb-9" />
      <Tabs isFitted variant="enclosed">
        <TabList className="flex flex-row">
          <Tab>One</Tab>
          <Tab>Change username</Tab>
          <Tab>Change password</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <div className="mt-12">
            <p>Change Password</p>

              <form className="mt-5">
                <Input placeholder="Enter current password" className="block" w="96" />
                <Input placeholder="Enter new password" className="block mt-4" w="96" />
                <Input placeholder="Enter verify new password" className="block mt-4" w="96" />

                <Button className="mt-4">
                  Save Changes
                </Button>
              </form>


            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>



    </div>
  )
}