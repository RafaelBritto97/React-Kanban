import { Box, Flex, Heading } from "@radix-ui/themes";
import { CreateTaskForm } from "./components/CreateTaskForm";
import { TaskBoard } from "./components/TaskBoard";

export default function App() {
  return (
    <Box minWidth="100vw">
      <Box maxWidth="80rem" minHeight="100vh" mx="auto">
        <Box height="4rem" px="4">
          <Flex align="center" gap="4" height="100%">
            <Heading size="8" weight="light">React Kanban</Heading>
            <CreateTaskForm />
          </Flex>
        </Box>

        <Box px="4">
          <Heading as="h2" mb={"4"}>Quadro de Tarefas</Heading>
          <TaskBoard />
        </Box>
      </Box>
    </Box>
  )
}
