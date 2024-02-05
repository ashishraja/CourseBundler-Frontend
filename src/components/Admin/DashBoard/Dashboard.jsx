import { Grid, Text, Box, Heading, Stack, HStack, Progress } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { getDashboardStats } from '../../../redux/actions/adminAction'
import Loader from '../../Layout/Loader/Loader'
import Sidebar from '../Sidebar'
import { DoughnutChart, LineChart } from './Chart'


const Databox = ({ title, qtyPercentage, qty, profit }) => (
    <Box
        w={['full', '20%']}
        boxShadow={'-2px 0 10px rgba(107,70,193,.5)'}
        p="8"
        borderRadius={'lg'}
    >
        <Text children={title} />

        <HStack spacing={'6'}>
            <Text fontSize={'2xl'} fontWeight="bold" children={qty} />
            <HStack>
                <Text children={`${qtyPercentage}%`} />
                {profit ? (
                    <RiArrowUpLine color="green" />
                ) : (
                    <RiArrowDownLine color="red" />
                )}
            </HStack>

        </HStack>
        <Text children={'Since Last Month'} opacity={'.6'} />
    </Box>
)

const Bar = ({ title, value, profit }) => (
    <Box py='4' px={['0', '20']}>
        <Heading size="sm" children={title} mb="2" />
        <HStack w="full" alignItems={"center"}>
            <Text children={profit ? "0%" : `-${value}%`} />
            <Progress w="full" value={profit ? value : 0} colorScheme="purple" />
            <Text children={`${value > 100 ? value : 100}%`} />
        </HStack>
    </Box>
)

const Dashboard = () => {

    const dispatch = useDispatch();

    const {
        loading,
        message
    } = useSelector(state => state.admin);

    useEffect(() => {
        dispatch(getDashboardStats());
    }, [dispatch]);

    return (
        <Grid
            minH={'100vh'} padding="7vw 0 0 0" templateColumns={["1fr", "5fr 1fr"]}
            css={{ cursor: 'url() , default' }}
        >
            {
                loading ? (
                    <Loader />
                ) : (
                    <Box
                        boxSizing="border-box"
                        py={'16'}
                        px={['4', '0']}>
                        <Text
                            textAlign={'center'}
                            m={["10vw 0 10vw 0", "0 0 5vw 0"]}
                            p={["0 20vw", "0"]}
                            opacity={0.5}
                            children={`Last Change was on ${String(new Date(message && message.stats[11].createdAt)).split('G')[0]}`} />
                        <Heading
                            children="Dashboard"
                            ml={['0', '16']}
                            mb="16"
                            textAlign={['enter', 'left']} />
                        <Stack
                            direction={['column', 'row']}
                            minH='24'
                            justifyContent={'space-evenly'}>
                            <Databox
                                title="Views"
                                qty={message && message.viewsCount}
                                qtyPercentage={message && message.viewsPercentage}
                                profit={message && message.viewsProfit} />
                            <Databox
                                title="Users"
                                qty={message && message.usersCount}
                                qtyPercentage={message && message.usersPercentage}
                                profit={message && message.usersProfit} />
                            <Databox
                                title="Subscription"
                                qty={message && message.subscriptionCount}
                                qtyPercentage={message && message.subscriptionPercentage}
                                profit={message && message.subscriptionProfit} />
                        </Stack>

                        <Box
                            margin={['0', '16']}
                            borderRadius="lg"
                            padding={['0', '10']}
                            mt={['4', '16']}
                            boxShadow={'-2px 0 10px rgba(107,70,193,.5)'}
                        >
                            <Heading
                                textAlign={['center', 'center']}
                                size="md"
                                children="Views Graph"                                
                                pb="4"
                                pt="4"
                            />

                            <LineChart dataArray={message && message.stats && message.stats.map(item=>item.views)} />

                        </Box>


                        <Grid templateColumns={["1fr", '2fr 1fr']}>
                            <Box p="4">
                                <Heading
                                    textAlign={['center', 'left']}
                                    size="md"
                                    children="Progress Bar"
                                    my="8"
                                    ml={['0', '16']}
                                />

                                <Box>
                                    <Bar profit={message && message.viewsProfit} title="Views" value={message && message.viewsPercentage} />
                                    <Bar profit={message && message.usersProfit} title="Users" value={message && message.usersPercentage} />
                                    <Bar profit={message && message.subscriptionProfit} title="Subscription" value={message && message.subscriptionPercentage} />
                                </Box>


                            </Box>

                            <Box
                                p={["0", "12"]}
                                boxSizing="border-box"
                                py="4"
                            >
                                <Heading
                                    textAlign={"center"}
                                    size="md"
                                    mb="4"
                                    children="Users"
                                />

                                <DoughnutChart users={[(message && message.subscriptionCount), (message && message.usersCount) - (message && message.subscriptionCount)]} />

                            </Box>
                        </Grid>
                    </Box>
                )
            }


            <Sidebar />
        </Grid>
    )
}

export default Dashboard

