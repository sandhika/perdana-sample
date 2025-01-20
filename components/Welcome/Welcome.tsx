import { Card,Paper,List, Text, Stack,Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <Paper  p="xl">
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
           Bank (BPR) Perdana
        </Text>
      </Title>
      <Stack 
        align="center"
        justify="center"
         gap="md"
      >

          <Card shadow="sm" padding="lg" radius="md" withBorder > 
          <Text>Visi</Text>
          <List>
            <List.Item>Menjadi BPR Terkemuka di Indonesia yang Mendukung Usaha Mikro</List.Item>
          </List>
          
          <Text>Misi</Text>
          <List>
            <List.Item>Menjadi Mitra Sejati Usaha Kecil</List.Item>
            <List.Item>Memberikan Pelayanan yang Unggul & Dapat Diandalkan</List.Item>
            <List.Item>Melayani dengan Tulus</List.Item>
            <List.Item>Melaksanakan Manajemen Perbankan yang Sehat dan Mengutamakan Prinsip Kehati-hatian & Good Corporate Governance
            </List.Item>
          </List>
          </Card>
      </Stack>





    </Paper>
  );
}
