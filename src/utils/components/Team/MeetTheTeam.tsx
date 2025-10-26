import React from "react";
import { Text, Box, Container, VStack } from "@chakra-ui/react";
import { TeamDisplay } from "./TeamDisplay";
import { BOARD_DATA, CLCHC_DATA, GCF_DATA, ELDR_DATA } from "@/utils/TeamData";

export const MeetTheTeam: React.FC = () => {
 const labels = ["Board", "CLCHC", "GCF", "ELDR"];

 const teamData = [BOARD_DATA, CLCHC_DATA, GCF_DATA, ELDR_DATA];

 return (
  <Container maxW="7xl" py={12}>
   <VStack spacing={8} align="stretch">
    <Box textAlign="center">
     <Text fontSize="7xl" fontWeight="bold" mb={4}>
      Meet the Team
     </Text>
    </Box>

    <TeamDisplay teamData={teamData} labels={labels} />
   </VStack>
  </Container>
 );
};

export default MeetTheTeam;
