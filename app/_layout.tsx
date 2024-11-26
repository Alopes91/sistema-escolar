import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
    return (
        <Drawer>
            <Drawer.Screen
                name="index"
                options={{ title: 'Início' }} />
            <Drawer.Screen
                name="pages/boletim"
                options={{ title: 'Boletim' }} />
            <Drawer.Screen
                name="pages/calendario"
                options={{ title: 'Calendário Escolar' }} />
            <Drawer.Screen
                name="pages/eventos"
                options={{ title: 'Eventos' }} />
            <Drawer.Screen
                name="pages/contato"
                options={{ title: 'Contato' }} />s
        </Drawer>
    );
}