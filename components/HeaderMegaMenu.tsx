'use client'
import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    ActionIcon,
    useMantineColorScheme,
    rem,
    AppShell,
    useStyles,
} from '@mantine/core';
import { useDisclosure, useFullscreen, useNetwork } from '@mantine/hooks';
import { Spotlight, SpotlightAction, SpotlightActionData, spotlight } from '@mantine/spotlight';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconSun,
    IconMoonStars,
    IconFileText,
    IconHome,
    IconDashboard,
    IconSearch,
} from '@tabler/icons-react';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import { useOs } from '@mantine/hooks';


const mockdata = [
    {
        icon: IconCode,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: IconCoin,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
        icon: IconBook,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
        icon: IconFingerprint,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
        icon: IconChartPie3,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
        icon: IconNotification,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
    },
];
const actions: SpotlightActionData[] = [
    {
        id: 'home',
        label: 'Home',
        description: 'Get to home page',
        onClick: () => router.push("/home"),
        leftSection: <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
      },
      {
        id: 'dashboard',
        label: 'Dashboard',
        description: 'Get full information about current system status',
        onClick: () =>router.push("/home"),
        leftSection: <IconDashboard style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
      },
      {
        id: 'documentation',
        label: 'Documentation',
        description: 'Visit documentation to lean more about all features',
        onClick: () => router.push("/home"),
        leftSection: <IconFileText style={{ width: rem(24), height: rem(24) }} stroke={1.5} />,
      },
];

export default function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const os = useOs();


    const links = mockdata.map((item) => (
        <UnstyledButton  key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={22}  />
                </ThemeIcon>
                <div>
                    <Text size="sm" >
                        {item.title}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));
    const { toggle, fullscreen } = useFullscreen();
    const networkStatus = useNetwork();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    return (
        <Box pb={120}>
            <AppShell.Header px="md">
                <div >
                <p>Your os is <b>{os}</b></p>
                    {/* <p

                    >
                        {!session && (
                            <>
                                <span >
                                    You are not signed in-  
                                </span>
                                <Link
                                    href="/api/auth/signin"

                                    onClick={(e: any) => {
                                        e.preventDefault()
                                        signIn()
                                    }}
                                    
                                >
                                    Sign in
                                </Link>
                            </>
                        )}
                        {session?.user && (
                            <>
                                {session.user.image && (
                                    <span
                                        style={{ backgroundImage: `url('${session.user.image}')` }}

                                    />
                                )}
                                <span >
                                    <small>Signed in as</small>
                                    <br />
                                    <strong>{session.user.email ?? session.user.name}</strong>
                                </span>
                                <Button
                                    // href="/api/auth/signout"

                                    onClick={async (e: any) => {
                                        e.preventDefault()
                                        const h = await signOut({ redirect: false, callbackUrl: '/auth/login' });
                                        // console.log(h);
                                        router.push(h.url)
                                        //  deleteCookie("user", newCookie);

                                    }}
                                >
                                    Sign out
                                </Button>
                            </>
                        )}
                    </p> */}
                </div>
                <Group align="apart">
                    <Spotlight
                        actions={actions}
                        // searchIcon={<IconSearch size={18} />}
                        // searchPlaceholder="Search..."
                        shortcut="mod + shift + 1"
                        // nothingFoundMessage="Nothing found..."
                    >
                        <Group align="center">
                            <Button onClick={spotlight.open}>Open spotlight </Button>
                        </Group>
                    </Spotlight>
                    {/* <ButtonToggle /> */}
                    <ActionIcon
                        variant="outline"
                        color={dark ? 'yellow' : 'blue'}
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                    >
                        {dark ? <IconSun  /> : <IconMoonStars  />}
                    </ActionIcon>
                   
                    <Link href="/home">
                        Home
                    </Link>
                    <Link href="/home/about" >
                        about
                    </Link>
                    <Link href="/home/paga" >
                        page
                    </Link>
                    <Link href="/home/service" >
                        service
                    </Link>
                    <Link href="/home/staticpages" >
                        staticpages
                    </Link>
                    <Link href="/auth/login" >
                        Login
                    </Link>
                    {/* <Text size="sm" color={networkStatus.online ? 'teal' : 'red'}>
                        {networkStatus.online ? 'Online' : 'Offline'}
                    </Text> */}
                    {/* <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
                        {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                    </Button>
                    <Button
                        onClick={() => setScrollLocked((c) => !c)}
                        variant="outline"
                        leftIcon={scrollLocked ? <IconLock size={16} /> : <IconLockOpen size={16} />}
                    >
                        {scrollLocked ? 'Unlock scroll' : 'Lock scroll'}
                    </Button> */}


                    <Burger opened={drawerOpened} onClick={toggleDrawer}  />
                </Group>
            </AppShell.Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                zIndex={1000000}
            >
            </Drawer>
        </Box>
    );
}

//https://onursimsek94.github.io/react-big-calendar/examples/index.html