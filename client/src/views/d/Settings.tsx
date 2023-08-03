import { Button, Input, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"


type Props = {}

export default function Settings({ }: Props) {
  return (
    <div>
      <h3 className="text-lg mt-4">Update your account information and see favs.</h3>
      <hr className="mt-3 mb-9" />
      <Tabs isFitted variant="enclosed">
        <TabList className="flex flex-row">
          <Tab>Favs</Tab>
          <Tab>Change username</Tab>
          <Tab>Change password</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Favs quotes!</p>
          </TabPanel>
          <TabPanel>
            <div className="mt-12">
              <p>Current username: Tolga123</p>
              <form className="mt-5">
                <Input placeholder="Enter new username" className="block" w="96" />

                <Button className="mt-4" color="green.300" variant="outline">
                  Save Changes
                </Button>
              </form>


            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-12">
              <form className="mt-5">
                <Input placeholder="Enter current password" className="block" w="96" />
                <Input placeholder="Enter new password" className="block mt-4" w="96" />
                <Input placeholder="Enter verify new password" className="block mt-4" w="96" />

                <Button className="mt-4" color="green.300" variant="outline">
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