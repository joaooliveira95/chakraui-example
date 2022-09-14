import { ChakraProvider, theme } from '@chakra-ui/react';

import ContractsTable from './components/ContractsTable.component';
import SidebarWithHeader from './layout/SidebarWithHeader.component';

export const App = () => (
  <ChakraProvider theme={theme}>
    <SidebarWithHeader>
      <ContractsTable />
    </SidebarWithHeader>
  </ChakraProvider>
);
