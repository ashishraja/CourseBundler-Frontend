import { Text, Button, Modal , ModalContent, ModalBody, ModalCloseButton, ModalHeader, ModalOverlay, Stack, VStack, ModalFooter, HStack, Avatar } from '@chakra-ui/react'
import React from 'react'


const UserModal = ({
    isOpen,
    onClose,
    id,
    name,
    email,
    avatarUrl,
    createdAt,
    role
}) => {

    const handleClose = () => {
        onClose();
    }

    return (
        <Modal isOpen={isOpen} size="full" onClose={handleClose} scrollBehavior="outside">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {name}'s Profile
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p="16">
                    <Stack
                        justifyContent={"flex-start"}
                        direction={["column", "row"]}
                        alignItems={["center"]}
                        spacing={["8", "20"]}
                        padding="24"
                    >
                        <VStack>
                            <Avatar boxSize={["48","80"]} src={avatarUrl}/>
                        </VStack>

                        <VStack spacing={"4"} alignItems={["center", "flex-start"]}>
                            <HStack>
                                <Text fontSize={["20px","25px"]} children="Name" fontWeight={'bold'} />
                                <Text fontSize={["20px","25px"]} children={name} />
                            </HStack>
                            <HStack>
                                <Text fontSize={["19px","25px"]} children="UserId" fontWeight={'bold'} />
                                <Text fontSize={["19px","25px"]} children={`#${id}`} />
                            </HStack>
                            <HStack>
                                <Text fontSize={["20px","25px"]} children="Role" fontWeight={'bold'} />
                                <Text fontSize={["20px","25px"]} children={role} />
                            </HStack>
                            <HStack>
                                <Text fontSize={["20px","25px"]} children="Email" fontWeight={'bold'} />
                                <Text fontSize={["20px","25px"]} children={email} />
                            </HStack>
                            <HStack>
                                <Text fontSize={["20px","25px"]} children="CreatedAt" fontWeight={'bold'} />
                                <Text fontSize={["20px","25px"]} children={createdAt.split('T')[0]} />
                            </HStack>

                        </VStack>
                    </Stack>

                </ModalBody>

                <ModalFooter>
                    <Button onClick={handleClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default UserModal

