import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

    const location = useLocation();
    return (
        <VStack spacing={'8'} p="16" boxShadow={"-2px 0 10px rgba(107,70,193,.5)"}>
            <LinkButton
                Icon={RiDashboardFill}
                text="Dashboard"
                active={location.pathname === "/admin/dashboard"}
                url="dashboard"
            />
            <LinkButton
                Icon={RiEyeFill}
                text="Courses"
                url="courses"
                active={location.pathname === "/admin/courses"}
            />
            <LinkButton
                Icon={RiUser3Fill}
                text="Users"
                url="users"
                active={location.pathname === "/admin/users"}
            />
            <LinkButton
                Icon={RiAddCircleFill}
                text="Create Course"
                active={location.pathname === "/admin/createcourse"}
                url="createcourse"
            />
            {/* <LinkButton
                Icon={RiAddCircleFill}
                text="Create Room"
                active={location.pathname === "/admin/createroom"}
                url="createroom"
            /> */}

        </VStack>
    )
}

export default Sidebar;

function LinkButton({ url, Icon, text, active }) {
    return (
        <Link to={`/admin/${url}`}>
            <Button fontSize={"larger"} variant={"ghost"} colorScheme={active ? "purple" : " "}>
                <Icon style={{ margin: "4px" }} />
                {text}
            </Button>
        </Link>
    )
}