export const STATIONS = {
    station1: {
        name: 'Проспект Космонавтов',
        coords: {
            latitude: 56.900348,
            longitude: 60.613789,
        },
        departures: {
            north: null,
            south: {
                workday: '06:05; 06:13; 06:21; 06:28; 06:35; 06:40; 06:45; 06:50; 06:54; 06:58; 07:02; 07:07; 07:11; 07:16; 07:20; 07:25; 07:29; 07:34; 07:38; 07:43; 07:47; 07:52; 07:56; 08:01; 08:05; 08:10; 08:14; 08:19; 08:23; 08:28; 08:32; 08:37; 08:41; 08:46; 08:50; 08:55; 08:59; 09:04; 09:09; 09:14; 09:19; 09:24; 09:30; 09:36; 09:42; 09:48; 09:54; 10:00; 10:06; 10:12; 10:18; 10:24; 10:30; 10:36; 10:43; 10:50; 10:58; 11:05; 11:13; 11:20; 11:28; 11:35; 11:43; 11:50; 11:58; 12:05; 12:13; 12:20; 12:28; 12:35; 12:43; 12:50; 12:58; 13:05; 13:13; 13:20; 13:28; 13:35; 13:43; 13:50; 13:58; 14:05; 14:13; 14:20; 14:28; 14:35; 14:43; 14:50; 14:58; 15:05; 15:13; 15:20; 15:28; 15:35; 15:43; 15:50; 15:58; 16:05; 16:11; 16:17; 16:22; 16:27; 16:32; 16:38; 16:43; 16:48; 16:53; 16:57; 17:02; 17:06; 17:11; 17:15; 17:20; 17:24; 17:29; 17:33; 17:38; 17:42; 17:47; 17:51; 17:56; 18:00; 18:05; 18:09; 18:14; 18:18; 18:23; 18:27; 18:32; 18:37; 18:42; 18:47; 18:52; 18:57; 19:02; 19:08; 19:14; 19:20; 19:26; 19:33; 19:40; 19:47; 19:54; 20:01; 20:08; 20:15; 20:22; 20:29; 20:38; 20:49; 21:00; 21:11; 21:22; 21:33; 21:44; 21:55; 22:06; 22:17; 22:28; 22:39; 22:50; 23:01; 23:12; 23:23; 23:35; 23:48; 00:02',
                dayOff: '06:01; 06:13; 06:25; 06:37; 06:48; 06:59; 07:08; 07:17; 07:27; 07:36; 07:45; 07:54; 08:03; 08:13; 08:22; 08:31; 08:40; 08:49; 08:59; 09:08; 09:17; 09:26; 09:35; 09:45; 09:54; 10:03; 10:12; 10:21; 10:31; 10:40; 10:49; 10:58; 11:07; 11:17; 11:26; 11:35; 11:44; 11:53; 12:03; 12:12; 12:21; 12:30; 12:39; 12:49; 12:58; 13:07; 13:16; 13:25; 13:35; 13:44; 13:53; 14:02; 14:11; 14:21; 14:30; 14:39; 14:48; 14:57; 15:07; 15:16; 15:25; 15:34; 15:43; 15:53; 16:02; 16:11; 16:20; 16:29; 16:39; 16:48; 16:57; 17:06; 17:15; 17:25; 17:34; 17:43; 17:52; 18:01; 18:11; 18:20; 18:29; 18:38; 18:47; 18:57; 19:06; 19:15; 19:24; 19:33; 19:43; 19:52; 20:01; 20:10; 20:19; 20:29; 20:38; 20:47; 20:56; 21:05; 21:15; 21:24; 21:33; 21:42; 21:51; 22:01; 22:10; 22:19; 22:28; 22:37; 22:47; 22:56; 23:05; 23:14; 23:23; 23:33; 23:42; 23:51; 00:02',
            },
        },
    },
    station2: {
        name: 'Уралмаш',
        coords: {
            latitude: 56.887009,
            longitude: 60.612866,
        },
        departures: {
            north: {
                workday: '06:13; 06:22; 06:30; 06:38; 06:45; 06:53; 07:01; 07:08; 07:15; 07:20; 07:24; 07:29; 07:33; 07:38; 07:42; 07:47; 07:51; 07:56; 08:00; 08:05; 08:09; 08:14; 08:18; 08:23; 08:27; 08:32; 08:36; 08:41; 08:45; 08:50; 08:54; 08:59; 09:03; 09:08; 09:12; 09:17; 09:21; 09:26; 09:30; 09:35; 09:39; 09:44; 09:49; 09:55; 10:00; 10:05; 10:11; 10:17; 10:23; 10:29; 10:35; 10:41; 10:47; 10:53; 10:59; 11:05; 11:11; 11:17; 11:23; 11:29; 11:37; 11:44; 11:52; 11:59; 12:07; 12:14; 12:22; 12:29; 12:37; 12:44; 12:52; 12:59; 13:07; 13:14; 13:22; 13:29; 13:37; 13:44; 13:52; 13:59; 14:07; 14:14; 14:22; 14:29; 14:37; 14:44; 14:52; 14:59; 15:07; 15:14; 15:22; 15:29; 15:37; 15:44; 15:52; 15:59; 16:07; 16:14; 16:22; 16:29; 16:37; 16:44; 16:50; 16:56; 17:02; 17:08; 17:13; 17:18; 17:22; 17:27; 17:32; 17:36; 17:41; 17:45; 17:50; 17:54; 17:59; 18:03; 18:08; 18:12; 18:17; 18:21; 18:26; 18:30; 18:35; 18:39; 18:44; 18:48; 18:53; 18:57; 19:02; 19:07; 19:12; 19:17; 19:22; 19:27; 19:32; 19:37; 19:42; 19:48; 19:54; 20:00; 20:06; 20:13; 20:20; 20:27; 20:34; 20:41; 20:48; 20:55; 21:02; 21:09; 21:17; 21:28; 21:39; 21:50; 22:01; 22:12; 22:23; 22:34; 22:45; 22:56;  23:07; 23:18; 23:29; 23:40; 23:52; 00:04; 00:16; 00:27',
                dayOff: '06:17; 06:30; 06:42; 06:54; 07:06; 07:17; 07:28; 07:39; 07:48; 07:57; 08:07; 08:16; 08:25; 08:34; 08:43; 08:53; 09:02; 09:11; 09:20; 09:29; 09:39; 09:48; 09:57; 10:06; 10:15; 10:25; 10:34; 10:43; 10:52; 11:01; 11:11; 11:20; 11:29; 11:38; 11:47; 11:57; 12:06; 12:15; 12:24; 12:33; 12:43; 12:52; 13:01; 13:10; 13:19; 13:29; 13:38; 13:47; 13:56; 14:05; 14:15; 14:24; 14:33; 14:42; 14:51; 15:01; 15:10; 15:19; 15:28; 15:37; 15:47; 15:56; 16:05; 16:14; 16:23; 16:33; 16:42; 16:51; 17:00; 17:09; 17:19; 17:28; 17:37; 17:46; 17:55; 18:05; 18:14; 18:23; 18:32; 18:41; 18:51; 19:00; 19:09; 19:18; 19:27; 19:37; 19:46; 19:55; 20:04; 20:13; 20:23; 20:32; 20:41; 20:50; 20:59; 21:09; 21:18; 21:27; 21:36; 21:45; 21:55; 22:04; 22:13; 22:22; 22:31; 22:41; 22:50; 22:59; 23:08; 23:17; 23:27; 23:36; 23:45; 23:54; 00:03; 00:13; 00:22;',
            },
            south: {
                workday: '06:07; 06:15; 06:23; 06:30; 06:37; 06:42; 06:47; 06:52; 06:56; 07:00; 07:04; 07:09; 07:13; 07:18; 07:22; 07:27; 07:31; 07:36; 07:40; 07:45; 07:49; 07:54; 07:58; 08:03; 08:07; 08:12; 08:16; 08:21; 08:25; 08:30; 08:34; 08:39; 08:43; 08:48; 08:52; 08:57; 09:01; 09:06; 09:11; 09:16; 09:21; 09:26; 09:32; 09:38; 09:44; 09:50; 09:56; 10:02; 10:08; 10:14; 10:20; 10:26; 10:32; 10:38; 10:45; 10:52; 11:00; 11:07; 11:15; 11:22; 11:30; 11:37; 11:45; 11:52; 12:00; 12:07; 12:15; 12:22; 12:30; 12:37; 12:45; 12:52; 13:00; 13:07; 13:15; 13:22; 13:30; 13:37; 13:45; 13:52; 14:00; 14:07; 14:15; 14:22; 14:30; 14:37; 14:45; 14:52; 15:00; 15:07; 15:15; 15:22; 15:30; 15:37; 15:45; 15:52; 16:00; 16:07; 16:13; 16:19; 16:24; 16:29; 16:34; 16:40; 16:45; 16:50; 16:55; 16:59; 17:04; 17:08; 17:13; 17:17; 17:22; 17:26; 17:31; 17:35; 17:40; 17:44; 17:49; 17:53; 17:58; 18:02; 18:07; 18:11; 18:16; 18:20; 18:25; 18:29; 18:34; 18:39; 18:44; 18:49; 18:54; 18:59; 19:04; 19:10; 19:16; 19:22; 19:28; 19:35; 19:42; 19:49; 19:56; 20:03; 20:10; 20:17; 20:24; 20:31; 20:40; 20:51; 21:02; 21:13; 21:24; 21:35; 21:46; 21:57; 22:08; 22:19; 22:30; 22:41;  22:52; 23:03; 23:14; 23:25; 23:37, 23:50;  00:04',
                dayOff: '06:03; 06:15; 06:27; 06:39; 06:50; 07:01; 07:10; 07:19; 07:29; 07:38; 07:47; 07:56; 08:05; 08:15; 08:24; 08:33; 08:42; 08:51; 09:01; 09:10; 09:19; 09:28; 09:37; 09:47; 09:56; 10:05; 10:14; 10:23; 10:33; 10:42; 10:51; 11:00; 11:09; 11:19; 11:28; 11:37; 11:46; 11:55; 12:05; 12:14; 12:23; 12:32; 12:41; 12:51; 13:00; 13:09; 13:18; 13:27; 13:37; 13:46; 13:55; 14:04; 14:13; 14:23; 14:32; 14:41; 14:50; 14:59; 15:09; 15:18; 15:27; 15:36; 15:45; 15:55; 16:04; 16:13; 16:22; 16:31; 16:41; 16:50; 16:59; 17:08; 17:17; 17:27; 17:36; 17:45; 17:54; 18:03; 18:13; 18:22; 18:31; 18:40; 18:49; 18:59; 19:08; 19:17; 19:26; 19:35; 19:45; 19:54; 20:03; 20:12; 20:21; 20;31; 20:40; 20:49; 20:58; 21:07; 21:17; 21:26; 21:35; 21:44; 21:53; 22:03; 22:12; 22:21; 22:30; 22:39; 22:49; 22:58; 23:07; 23:16; 23:22; 23:35; 23:44; 23:53; 00:04;',
            },
        },
    },
    station3: {
        name: 'Машиностроителей',
        coords: {
            latitude: 56.876010,
            longitude: 60.612147,
        },
        departures: {
            north: {
                workday: '06:11; 06:20; 06:28; 06:36; 06:43; 06:51; 06:59; 07:06; 07:13; 07:18; 07:22; 07:27; 07:31; 07:36; 07:40; 07:45; 07:49; 07:54; 07:58; 08:03; 08:07; 08:12; 08:16; 08:21; 08:25; 08:30; 08:34; 08:39; 08:43; 08:48; 08:52; 08:57; 09:01; 09:06; 09:10; 09:15; 09:19; 09:24; 09:28; 09:33; 09:37; 09:42; 09:47; 09:53; 09:58; 10:03; 10:09; 10:15; 10:21; 10:27; 10:33; 10:39; 10:45; 10:51; 10:57; 11:03; 11:09; 11:15; 11:21; 11:27; 11:35; 11:42; 11:50; 11:57; 12:05; 12:12; 12:20; 12:27; 12:35; 12:42; 12:50; 12:57; 13:05; 13:12; 13:20; 13:27; 13:35; 13:42; 13:50; 13:57; 14:05; 14:12; 14:20; 14:27; 14:35; 14:42; 14:50; 14:57; 15:05; 15:12; 15:20; 15:27; 15:35; 15:42; 15:50; 15:57; 16:05; 16:12; 16:20; 16:27; 16:35; 16:42; 16:48; 16:54; 17:00; 17:06; 17:11; 17:16; 17:20; 17:25; 17:30; 17:34; 17:39; 17:43; 17:48; 17:52; 17:57; 18:01; 18:06; 18:10; 18:15; 18:19; 18:24; 18:28; 18:33; 18:37; 18:42; 18:46; 18:51; 18:55; 19:00; 19:05; 19:10; 19:15; 19:20; 19:25; 19:30; 19:35; 19:40; 19:46; 19:52; 19:58; 20:04; 20:11; 20:18; 20:25; 20:32; 20:39; 20:46; 20:53; 21:00; 21:07; 21:15; 21:26; 21:37; 21:48; 21:59; 22:10; 22:21; 22:32; 22:43; 22:54;  23:05; 23:16; 23:27; 23:38; 23:50; 00:02; 00:14; 00:25',
                dayOff: '06:15; 06:28; 06:40; 06:52; 07:04; 07:15; 07:26; 07:37; 07:46; 07:55; 08:05; 08:14; 08:23; 08:32; 08:41; 08:51; 09:00; 09:09; 09:18; 09:27; 09:37; 09:46; 09:55; 10:04; 10:13; 10:23; 10:32; 10:41; 10:50; 10:59; 11:09; 11:18; 11:27; 11:36; 11:45; 11:55; 12:04; 12:13; 12:22; 12:31; 12:41; 12:50; 12:59; 13:08; 13:17; 13:27; 13:36; 13:45; 13:54; 14:03; 14:13; 14:22; 14:31; 14:40; 14:49; 14:59; 15:08; 15:17; 15:26; 15:35; 15:45; 15:54; 16:03; 16:12; 16:21; 16:31; 16:40; 16:49; 16:58; 17:07; 17:17; 17:26; 17:35; 17:44; 17:53; 18:03; 18:12; 18:21; 18:30; 18:39; 18:49; 18:58; 19:07; 19:16; 19:25; 19:35; 19:44; 19:53; 20:02; 20:11; 20:21; 20:30; 20:39; 20:48; 20:57; 21:07; 21:16; 21:25; 21:34; 21:43; 21:53; 22:02; 22:11; 22:20; 22:29; 22:39; 22:48; 22:57; 23:06; 23:15; 23:25; 23:34; 23:43; 23:52; 00:01; 00:11; 00:20',
            },
            south: {
                workday: '06:01; 06:09; 06:17; 06:25; 06:32; 06:39; 06:44; 06:49; 06:54; 06:58; 07:02; 07:06; 07:11; 07:15; 07:20; 07:24; 07:29; 07:33; 07:38; 07:42; 07:47; 07:51; 07:56; 08:00; 08:05; 08:09; 08:14; 08:18; 08:23; 08:27; 08:32; 08:36; 08:41; 08:45; 08:50; 08:54; 08:59; 09:03; 09:08; 09:13; 09:18; 09:23; 09:28; 09:34; 09:40; 09:46; 09:52; 09:58; 10:04; 10:10; 10:16; 10:22; 10:28; 10:34; 10:40; 10:47; 10:54; 11:02; 11:09; 11:17; 11:24; 11:32; 11:39; 11:47; 11:54; 12:02; 12:09; 12:17; 12:24; 12:32; 12:39; 12:47; 12:54; 13:02; 13:09; 13:17; 13:24; 13:32; 13:39; 13:47; 13:54; 14:02; 14:09; 14:17; 14:24; 14:32; 14:39; 14:47; 14:54; 15:02; 15:09; 15:17; 15:24; 15:32; 15:39; 15:47; 15:54; 16:02; 16:09; 16:15; 16:21; 16:26; 16:31; 16:36; 16:42; 16:47; 16:52; 16:57; 17:01; 17:06; 17:10; 17:15; 17:19; 17:24; 17:28; 17:33; 17:37; 17:42; 17:46; 17:51; 17:55; 18:00; 18:04; 18:09; 18:13; 18:18; 18:22; 18:27; 18:31; 18:36; 18:41; 18:46; 18:51; 18:56; 19:01; 19:06; 19:12; 19:18; 19:24; 19:30; 19:37; 19:44; 19:51; 19:58; 20:05; 20:12; 20:19; 20:26; 20:33; 20:42; 20:53; 21:04; 21:15; 21:26; 21:37; 21:48; 21:59; 22:10; 22:21; 22:32; 22:43;  22:54; 23:05; 23:16; 23:27; 23:39, 23:52;  00:06',
                dayOff: '06:05; 06:17; 06:29; 06:41; 06:52; 07:03; 07:12; 07:21; 07:31; 07:40; 07:49; 07:58; 08:07; 08:17; 08:26; 08:35; 08:44; 08:53; 09:03; 09:12; 09:21; 09:30; 09:39; 09:49; 09:58; 10:07; 10:16; 10:25; 10:35; 10:44; 10:53; 11:02; 11:11; 11:21; 11:30; 11:39; 11:48; 11:57; 12:07; 12:16; 12:25; 12:34; 12:43; 12:53; 13:02; 13:11; 13:20; 13:29; 13:39; 13:48; 13:57; 14:06; 14:15; 14:25; 14:34; 14:43; 14:52; 15:01; 15:11; 15:20; 15:29; 15:38; 15:47; 15:57; 16:06; 16:15; 16:24; 16:33; 16:43; 16:52; 17:01; 17:10; 17:19; 17:29; 17:38; 17:47; 17:56; 18:05; 18:15; 18:24; 18:33; 18:42; 18:51; 19:01; 19:10; 19:19; 19:28; 19:37; 19:47; 19:56; 20:05; 20:14; 20:23; 20:33; 20:42; 20:51; 21:00; 21:09; 21:19; 21:28; 21:37; 21:46; 21:55; 22:05; 22:14; 22:23; 22:32; 22:41; 22:51; 23:00; 23:09; 23:18; 23:27; 23:37; 23:46; 23:55; 00:06',
            },
        },
    },
    station4: {
        name: 'Уральская',
        coords: {
            latitude: 56.857739,
            longitude: 60.600073,
        },
        departures: {
            north: {
                workday: '06:07; 06:17; 06:25; 06:33; 06:40; 06:48; 06:56; 07:03; 07:10; 07:15; 07:19; 07:24; 07:28; 07:33; 07:37; 07:42; 07:46; 07:51; 07:55; 08:00; 08:04; 08:09; 08:13; 08:18; 08:22; 08:27; 08:31; 08:36; 08:40; 08:45; 08:49; 08:54; 08:58; 09:03; 09:07; 09:12; 09:16; 09:21; 09:25; 09:30; 09:34; 09:39; 09:44; 09:50; 09:55; 10:00; 10:06; 10:12; 10:18; 10:24; 10:30; 10:36; 10:42; 10:48; 10:54; 11:00; 11:06; 11:12; 11:18; 11:24; 11:32; 11:39; 11:47; 11:54; 12:02; 12:09; 12:17; 12:24; 12:32; 12:39; 12:47; 12:54; 13:02; 13:09; 13:17; 13:24; 13:32; 13:39; 13:47; 13:54; 14:02; 14:09; 14:17; 14:24; 14:32; 14:39; 14:47; 14:54; 15:02; 15:09; 15:17; 15:24; 15:32; 15:39; 15:47; 15:54; 16:02; 16:09; 16:17; 16:24; 16:32; 16:39; 16:45; 16:51; 16:57; 17:03; 17:08; 17:13; 17:17; 17:22; 17:27; 17:31; 17:36; 17:40; 17:45; 17:49; 17:54; 17:58; 18:03; 18:07; 18:12; 18:16; 18:21; 18:25; 18:30; 18:34; 18:39; 18:43; 18:48; 18:52; 18:57; 19:02; 19:07; 19:12; 19:17; 19:22; 19:27; 19:32; 19:37; 19:43; 19:49; 19:55; 20:01; 20:08; 20:15; 20:22; 20:29; 20:36; 20:43; 20:50; 20:57; 21:04; 21:12; 21:23; 21:34; 21:45; 21:56; 22:07; 22:18; 22:29; 22:40; 22:51; 23:02; 23:13; 23:24; 23:35; 23:47; 23:59; 00:11; 00:22',
                dayOff: '06:11; 06:24; 06:36; 06:48; 07:00; 07:11; 07:22; 07:33; 07:42; 07:51; 08:01; 08:10; 08:19; 08:28; 08:37; 08:47; 08:56; 09:05; 09:14; 09:23; 09:33; 09:42; 09:51; 10:00; 10:09; 10:19; 10:28; 10:37; 10:46; 10:55; 11:05; 11:14; 11:23; 11:32; 11:41; 11:51; 12:00; 12:09; 12:18; 12:27; 12:37; 12:46; 12:55; 13:04; 13:13; 13:23; 13:32; 13:41; 13:50; 13:59; 14:09; 14:18; 14:27; 14:36; 14:45; 14:55; 15:04; 15:13; 15:22; 15:31; 15:41; 15:50; 15:59; 16:08; 16:17; 16:27; 16:36; 16:45; 16:54; 17:03; 17:13; 17:22; 17:31; 17:40; 17:49; 17:59; 18:08; 18:17; 18:26; 18:35; 18:45; 18:54; 19:03; 19:12; 19:21; 19:31; 19:40; 19:49; 19:58; 20:07; 20:17; 20:26; 20:35; 20:44; 20:53; 21:03; 21:12; 21:21; 21:30; 21:39; 21:49; 21:58; 22:07; 22:16; 22:25; 22:35; 22:44; 22:53; 23:02; 23:11; 23:21; 23:30; 23:39; 23:48; 23:57; 00:07; 00:16',
            },
            south: {
                workday: '06:04; 06:12; 06:20; 06:28; 06:35; 06:42; 06:47; 06:52; 06:57; 07:01; 07:05; 07:09; 07:14; 07:18; 07:23; 07:27; 07:32; 07:36; 07:41; 07:45; 07:50; 07:54; 07:59; 08:03; 08:08; 08:12; 08:17; 08:21; 08:26; 08:30; 08:35; 08:39; 08:44; 08:48; 08:53; 08:57; 09:02; 09:06; 09:11; 09:16; 09:21; 09:26; 09:31; 09:37; 09:43; 09:49; 09:55; 10:01; 10:07; 10:13; 10:19; 10:25; 10:31; 10:37; 10:43; 10:50; 10:57; 11:05; 11:12; 11:20; 11:27; 11:35; 11:42; 11:50; 11:57; 12:05; 12:12; 12:20; 12:27; 12:35; 12:42; 12:50; 12:57; 13:05; 13:12; 13:20; 13:27; 13:35; 13:42; 13:50; 13:57; 14:05; 14:12; 14:20; 14:27; 14:35; 14:42; 14:50; 14:57; 15:03; 15:12; 15:20; 15:27; 15:35; 15:42; 15:50; 15:57; 16:05; 16:12; 16:18; 16:24; 16:29; 16:34; 16:39; 16:45; 16:50; 16:55; 17:00; 17:04; 17:09; 17:13; 17:18; 17:22; 17:27; 17:31; 17:36; 17:40; 17:45; 17:49; 17:54; 17:58; 18:03; 18:07; 18:12; 18:15; 18:21; 18:25; 18:30; 18:34; 18:39; 18:44; 18:49; 18:54; 18:59; 19:04; 19:09; 19:15; 19:21; 19:27; 19:33; 19:40; 19:47; 19:54; 20:01; 20:08; 20:15; 20:22; 20:29; 20:36; 20:45; 20:56; 21:07; 21:18; 21:29; 21:40; 21:51; 22:02; 22:13; 22:24; 22:35; 22:46;  22:57; 23:08; 23:19; 23:30; 23:42, 23:55;  00:09',
                dayOff: '06:08; 06:20; 06:32; 06:44; 06:55; 07:06; 07:15; 07:24; 07:34; 07:43; 07:52; 08:01; 08:10; 08:20; 08:29; 08:38; 08:47; 08:56; 09:06; 09:15; 09:24; 09:33; 09:42; 09:52; 10:01; 10:10; 10:19; 10:28; 10:38; 10:47; 10:56; 11:05; 11:14; 11:24; 11:33; 11:42; 11:51; 12:00; 12:10; 12:19; 12:28; 12:37; 12:46; 12:56; 13:05; 13:14; 13:23; 13:32; 13:42; 13:51; 14:00; 14:09; 14:18; 14:28; 14:37; 14:46; 14:55; 15:04; 15:14; 15:23; 15:32; 15:41; 15:50; 16:00; 16:09; 16:18; 16:27; 16:36; 16:46; 16:55; 17:04; 17:13; 17:22; 17:32; 17:41; 17:50; 17:59; 18:08; 18:18; 18:27; 18:36; 18:45; 18:54; 19:04; 19:13; 19:22; 19:31; 19:40; 19:50; 19:59; 20:08; 20:17; 20:26; 20:36; 20:45; 20:54; 21:03; 21:12; 21:22; 21:31; 21:40; 21:49; 21:58; 22:08; 22:17; 22:26; 22:35; 22:44; 22:54; 23:03; 23:12; 23:21; 23:30; 23:40; 23:49; 23:58; 00:09',
            },
        },
    },
    station5: {
        name: 'Динамо',
        coords: {
            latitude: 56.847803,
            longitude: 60.599326,
        },
        departures: {
            north: {
                workday: '06:05; 06:15; 06:23; 06:31; 06:38; 06:46; 06:54; 07:01; 07:08; 07:13; 07:17; 07:22; 07:26; 07:31; 07:35; 07:40; 07:44; 07:49; 07:53; 07:58; 08:02; 08:07; 08:11; 08:16; 08:20; 08:25; 08:29; 08:34; 08:38; 08:43; 08:47; 08:52; 08:56; 09:01; 09:05; 09:10; 09:14; 09:19; 09:23; 09:28; 09:32; 09:37; 09:42; 09:48; 09:53; 09:58; 10:04; 10:10; 10:16; 10:22; 10:28; 10:34; 10:40; 10:46; 10:52; 10:58; 11:04; 11:10; 11:16; 11:22; 11:30; 11:37; 11:45; 11:52; 12:00; 12:07; 12:15; 12:22; 12:30; 12:37; 12:45; 12:52; 13:00; 13:07; 13:15; 13:22; 13:30; 13:37; 13:45; 13:52; 14:00; 14:07; 14:15; 14:22; 14:30; 14:37; 14:45; 14:52; 15:00; 15:07; 15:15; 15:22; 15:30; 15:37; 15:45; 15:52; 16:00; 16:07; 16:15; 16:22; 16:30; 16:37; 16:43; 16:49; 16:55; 17:01; 17:06; 17:11; 17:15; 17:20; 17:25; 17:29; 17:34; 17:38; 17:43; 17:47; 17:52; 17:56; 18:01; 18:05; 18:10; 18:14; 18:19; 18:23; 18:28; 18:32; 18:37; 18:41; 18:46; 18:50; 18:55; 19:00; 19:05; 19:10; 19:15; 19:20; 19:25; 19:30; 19:35; 19:41; 19:47; 19:53; 19:59; 20:06; 20:13; 20:20; 20:27; 20:34; 20:41; 20:48; 20:55; 21:02; 21:10; 21:21; 21:32; 21:43; 21:54; 22:05; 22:16; 22:27; 22:38; 22:49; 23:00; 23:11; 23:22; 23:33; 23:45; 23:57; 00:09; 00:20',
                dayOff: '06:09; 06:22; 06:34; 06:46; 06:58; 07:09; 07:20; 07:31; 07:40; 07:49; 07:59; 08:08; 08:17; 08:26; 08:35; 08:45; 08:54; 09:03; 09:12; 09:21; 09:31; 09:40; 09:49; 09:58; 10:07; 10:17; 10:26; 10:35; 10:44; 10:53; 11:03; 11:12; 11:21; 11:30; 11:39; 11:49; 11:58; 12:07; 12:16; 12:25; 12:35; 12:44; 12:53; 13:02; 13:11; 13:21; 13:30; 13:39; 13:48; 13:57; 14:07; 14:16; 14:25; 14:34; 14:43; 14:53; 15:02; 15:11; 15:20; 15:29; 15:39; 15:48; 15:57; 16:06; 16:15; 16:25; 16:34; 16:43; 16:52; 17:01; 17:11; 17:20; 17:29; 17:38; 17:47; 17:57; 18:06; 18:15; 18:24; 18:33; 18:43; 18:52; 19:01; 19:10; 19:19; 19:29; 19:38; 19:47; 19:56; 20:05; 20:15; 20:24; 20:33; 20:42; 20:51; 21:01; 21:10; 21:19; 21:28; 21:37; 21:47; 21:56; 22:05; 22:14; 22:23; 22:33; 22:42; 22:51; 23:00; 23:09; 23:19; 23:28; 23:37; 23:46; 23:55; 00:05; 00:14',
            },
            south: {
                workday: '06:06; 06:14; 06:22; 06:30; 06:37; 06:44; 06:49; 06:54; 06:59; 07:03; 07:07; 07:11; 07:16; 07:20; 07:25; 07:29; 07:34; 07:38; 07:43; 07:47; 07:52; 07:56; 08:01; 08:05; 08:10; 08:14; 08:19; 08:23; 08:28; 08:32; 08:37; 08:41; 08:46; 08:50; 08:55; 08:59; 09:04; 09:08; 09:13; 09:18; 09:23; 09:28; 09:33; 09:39; 09:45; 09:51; 09:57; 10:03; 10:09; 10:15; 10:21; 10:27; 10:33; 10:39; 10:45; 10:52; 10:59; 11:07; 11:14; 11:22; 11:29; 11:37; 11:44; 11:52; 11:59; 12:07; 12:14; 12:22; 12:29; 12:37; 12:44; 12:52; 12:59; 13:07; 13:14; 13:22; 13:29; 13:37; 13:44; 13:52; 13:59; 14:07; 14:14; 14:22; 14:29; 14:37; 14:44; 14:52; 14:59; 15:07; 15:14; 15:22; 15:29; 15:37; 15:44; 15:52; 15:59; 16:07; 16:14; 16:20; 16:26; 16:31; 16:36; 16:41; 16:47; 16:52; 16:57; 17:02; 17:06; 17:11; 17:15; 17:20; 17:24; 17:29; 17:33; 17:38; 17:42; 17:47; 17:51; 17:56; 18:00; 18:05; 18:09; 18:14; 18:18; 18:23; 18:27; 18:32; 18:36; 18:41; 18:46; 18:51; 18:56; 19:01; 19:06; 19:11; 19:17; 19:23; 19:29; 19:35; 19:42; 19:49; 19:56; 20:03; 20:10; 20:17; 20:24; 20:31; 20:38; 20:47; 20:58; 21:09; 21:20; 21:31; 21:42; 21:53; 22:04; 22:15; 22:26; 22:37; 22:48;  22:59; 23:10; 23:21; 23:32; 23:44, 23:57;  00:11',
                dayOff: '06:10; 06:22; 06:34; 06:46; 06:57; 07:08; 07:17; 07:26; 07:36; 07:45; 07:54; 08:03; 08:12; 08:22; 08:31; 08:40; 08:49; 08:58; 09:08; 09:17; 09:26; 09:35; 09:44; 09:54; 10:03; 10:12; 10:21; 10:30; 10:40; 10:49; 10:58; 11:07; 11:16; 11:26; 11:35; 11:44; 11:53; 12:02; 12:12; 12:21; 12:30; 12:39; 12:48; 12:58; 13:07; 13:16; 13:25; 13:34; 13:44; 13:53; 14:02; 14:11; 14:20; 14:30; 14:39; 14:48; 14:57; 15:06; 15:16; 15:25; 15:34; 15:43; 15:52; 16:02; 16:11; 16:20; 16:29; 16:38; 16:48; 16:57; 17:06; 17:15; 17:24; 17:34; 17:43; 17:52; 18:01; 18:10; 18:20; 18:29; 18:38; 18:47; 18:56; 19:06; 19:15; 19:24; 19:33; 19:42; 19:52; 20:01; 20:10; 20:19; 20:28; 20:38; 20:47; 20:56; 21:05; 21:14; 21:24; 21:33; 21:42; 21:51; 22:00; 22:10; 22:19; 22:28; 22:37; 22:46; 22:56; 23:05; 23:14; 23:23; 23:32; 23:42; 23:51; 00:00; 00:11',
            },
        },
    },
    station6: {
        name: 'Площадь 1905 года',
        coords: {
            latitude: 56.835975,
            longitude: 60.598742,
        },
        departures: {
            north: {
                workday: '06:03; 06:13; 06:21; 06:29; 06:36; 06:44; 06:52; 06:59; 07:06; 07:11; 07:15; 07:20; 07:24; 07:29; 07:33; 07:38; 07:42; 07:47; 07:51; 07:56; 08:00; 08:05; 08:09; 08:14; 08:18; 08:23; 08:27; 08:32; 08:36; 08:41; 08:45; 08:50; 08:54; 08:59; 09:03; 09:08; 09:12; 09:17; 09:21; 09:26; 09:30; 09:35; 09:40; 09:46; 09:51; 09:56; 10:02; 10:08; 10:14; 10:20; 10:26; 10:32; 10:38; 10:44; 10:50; 10:56; 11:02; 11:08; 11:14; 11:20; 11:28; 11:35; 11:43; 11:50; 11:58; 12:05; 12:13; 12:20; 12:28; 12:35; 12:43; 12:50; 12:58; 13:05; 13:13; 13:20; 13:28; 13:35; 13:43; 13:50; 13:58; 14:05; 14:13; 14:20; 14:28; 14:35; 14:43; 14:50; 14:58; 15:05; 15:13; 15:20; 15:28; 15:35; 15:43; 15:50; 15:58; 16:05; 16:13; 16:20; 16:28; 16:35; 16:41; 16:47; 16:53; 16:59; 17:04; 17:09; 17:13; 17:18; 17:23; 17:27; 17:32; 17:36; 17:41; 17:45; 17:50; 17:54; 17:59; 18:03; 18:08; 18:12; 18:17; 18:21; 18:26; 18:30; 18:35; 18:39; 18:44; 18:48; 18:53; 18:58; 19:03; 19:08; 19:13; 19:18; 19:23; 19:28; 19:33; 19:39; 19:45; 19:51; 19:57; 20:04; 20:11; 20:18; 20:25; 20:32; 20;39; 20:46; 20:53; 21:00; 21:08; 21:19; 21:30; 21:41; 21:52; 22:03; 22:14; 22:25; 22:36; 22:47; 22:58; 23:09; 23:20; 23:31; 23:43; 23:55; 00:07; 00:18',
                dayOff: '06:07; 06:20; 06:32; 06:44; 06:56; 07:07; 07:18; 07:29; 07:38; 07:47; 07:57; 08:06; 08:15; 08:24; 08:33; 08:43; 08:52; 09:01; 09:10; 09:19; 09:29; 09:38; 09:47; 09:56; 10:05; 10:15; 10:24; 10:33; 10:42; 10:51; 11:01; 11:10; 11:19; 11:28; 11:37; 11:47; 11:56; 12:05; 12:14; 12:23; 12:33; 12:42; 12:51; 13:00; 13:09; 13:19; 13:28; 13:37; 13:46; 13:55; 14:05; 14:14; 14:23; 14:32; 14:41; 14:51; 15:00; 15:09; 15:18; 15:27; 15:37; 15:46; 15:55; 16:04; 16:13; 16:23; 16:32; 16:41; 16:50; 16:59; 17:09; 17:18; 17:27; 17:36; 17:45; 17:55; 18:04; 18:13; 18:22; 18:31; 18:41; 18:50; 18:59; 19:08; 19:17; 19:27; 19:36; 19:45; 19:54; 20:03; 20:13; 20:22; 20:31; 20:40; 20:49; 20:59; 21:08; 21:17; 21:26; 21:35; 21:45; 21:54; 22:03; 22:12; 22:21; 22:31; 22:40; 22:49; 22:58; 23:07; 23:17; 23:26; 23:35; 23:44; 23:53; 00:03; 00:12',
            },
            south: {
                workday: '06:00; 06:08; 06:16; 06:24; 06:32; 06:39; 06:46; 06:51; 06:56; 07:01; 07:05; 07:09; 07:13; 07:18; 07:22; 07:27; 07:31; 07:36; 07:40; 07:45; 07:49; 07:54; 07:58; 08:03; 08:07; 08:12; 08:16; 08:21; 08:25; 08:30; 08:34; 08:39; 08:43; 08:48; 08:52; 08:57; 09:01; 09:06; 09:10; 09:15; 09:20; 09:25; 09:30; 09:35; 09:41; 09:47; 09:53; 09:59; 10:05; 10:11; 10:17; 10:23; 10:29; 10:35; 10:41; 10:47; 10:54; 11:01; 11:09; 11:16; 11:24; 11:31; 11:39; 11:46; 11:54; 12:01; 12:09; 12:16; 12:24; 12:31; 12:39; 12:46; 12:54; 13:01; 13:09; 13:16; 13:24; 13:31; 13:39; 13:46; 13:54; 14:01; 14:09; 14:16; 14:24; 14:31; 14:39; 14:46; 14:54; 15:01; 15:09; 15:16; 15:24; 15:31; 15:39; 15:46; 15:54; 16:01; 16:09; 16:16; 16:22; 16:28; 16:33; 16:38; 16:43; 16:49; 16:54; 16:59; 17:04; 17:08; 17:13; 17:17; 17:22; 17:26; 17:31; 17:35; 17:40; 17:44; 17:49; 17:53; 17:58; 18:02; 18:07; 18:11; 18:16; 18:20; 18:25; 18:29; 18:34; 18:38; 18:43; 18:48; 18:53; 18:58; 19:03; 19:08; 19:13; 19:19; 19:25; 19:31; 19:37; 19:44; 19:51; 19:58; 20:05; 20:12; 20:19; 20:26; 20:33; 20:40; 20:49; 21:00; 21:11; 21:22; 21:33; 21:44; 21:55; 22:06; 22:17; 22:28; 22:39; 22:50; 23:01; 23:12; 23:23; 23:34; 23:46, 23:59;  00:13',
                dayOff: '06:00; 06:12; 06:24; 06:36; 06:48; 06:59; 07:10; 07:19; 07:28; 07:38; 07:47; 07:56; 08:05; 08:14; 08:24; 08:33; 08:42; 08:51; 09:00; 09:10; 09:19; 09:28; 09:37; 09:46; 09:56; 10:05; 10:14; 10:23; 10:32; 10:42; 10:51; 11:00; 11:09; 11:18; 11:28; 11:37; 11:46; 11:55; 12:04; 12:14; 12:23; 12:32; 12:41; 12:50; 13:00; 13:09; 13:18; 13:27; 13:36; 13:46; 13:55; 14:04; 14:13; 14:22; 14:32; 14:41; 14:50; 14:59; 15:08; 15:18; 15:27; 15:36; 15:45; 15:54; 16:04; 16:13; 16:22; 16:31; 16:40; 16:50; 16:59; 17:08; 17:17; 17:26; 17:36; 17:45; 17:54; 18:03; 18:12; 18:22; 18:31; 18:40; 18:49; 18:58; 19:08; 19:17; 19:26; 19:35; 19:44; 19:54; 20:03; 20:12; 20:21; 20:30; 20:40; 20:49; 20:58; 21:07; 21:16; 21:26; 21:35; 21:44; 21:53; 22:02; 22:12; 22:21; 22:30; 22:39; 22:48; 22:58; 23:07; 23:16; 23:25; 23:34; 23:44; 23:53; 00:02; 00:13',
            },
        },
    },
    station7: {
        name: 'Геологическая',
        coords: {
            latitude: 56.826450,
            longitude: 60.603044,
        },
        departures: {
            north: {
                workday: '06:01; 06:11; 06:19; 06:27; 06:34; 06:42; 06:50; 06:57; 07:04; 07:09; 07:13; 07:18; 07:22; 07:27; 07:31; 07:36; 07:40; 07:45; 07:49; 07:54; 07:58; 08:03; 08:07; 08:12; 08:16; 08:21; 08:25; 08:30; 08:34; 08:39; 08:43; 08:48; 08:52; 08:57; 09:01; 09:06; 09:10; 09:15; 09:19; 09:24; 09:28; 09:33; 09:38; 09:44; 09:49; 09:54; 10:00; 10:06; 10:12; 10:18; 10:24; 10:30; 10:36; 10:42; 10:48; 10:54; 11:00; 11:06; 11:12; 11:18; 11:26; 11:33; 11:41; 11:48; 11:56; 12:03; 12:11; 12:18; 12:26; 12:33; 12:41; 12:48; 12:56; 13:03; 13:11; 13:18; 13:26; 13:33; 13:41; 13:48; 13:56; 14:03; 14:11; 14:18; 14:26; 14:33; 14:41; 14:48; 14:56; 15:03; 15:11; 15:18; 15:26; 15:33; 15:41; 15:48; 15:56; 16:03; 16:11; 16:18; 16:26; 16:33; 16:39; 16:45; 16:51; 16:57; 17:02; 17:07; 17:11; 17:16; 17:21; 17:25; 17:30; 17:34; 17:39; 17:43; 17:48; 17:52; 17:57; 18:01; 18:06; 18:10; 18:15; 18:19; 18:24; 18:28; 18:33; 18:37; 18:42; 18:46; 18:51; 18:56; 19:01; 19:06; 19:11; 19:16; 19:21; 19:26; 19:31; 19:37; 19:43; 19:49; 19:55; 20:02; 20:09; 20:16; 20:23; 20:30; 20;37; 20:44; 20:51; 20:58; 21:06; 21:17; 21:28; 21:39; 21:50; 22:01; 22:12; 22:23; 22:34; 22:45; 22:56; 23:07; 23:18; 23:29; 23:41; 23:53; 00:05; 00:16',
                dayOff: '06:05; 06:18; 06:30; 06:42; 06:54; 07:05; 07:16; 07:27; 07:36; 07:45; 07:55; 08:04; 08:13; 08:22; 08:31; 08:41; 08:50; 08:59; 09:08; 09:17; 09:27; 09:36; 09:45; 09:54; 10:03; 10:13; 10:22; 10:31; 10:40; 10:49; 10:59; 11:08; 11:17; 11:26; 11:35; 11:45; 11:54; 12:03; 12:12; 12:21; 12:31; 12:40; 12:49; 12:58; 13:07; 13:17; 13:26; 13:35; 13:44; 13:53; 14:03; 14:12; 14:21; 14:30; 14:39; 14:49; 14:58; 15:07; 15:16; 15:25; 15:35; 15:44; 15:53; 16:02; 16:11; 16:21; 16:30; 16:39; 16:48; 16:57; 17:07; 17:16; 17:25; 17:34; 17:43; 17:53; 18:02; 18:11; 18:20; 18:29; 18:39; 18:48; 18:57; 19:06; 19:15; 19:25; 19:34; 19:43; 19:52; 20:01; 20:11; 20:20; 20:29; 20:38; 20:47; 20:57; 21:06; 21:15; 21:24; 21:33; 21:43; 21:52; 22:01; 22:10; 22:19; 22:29; 22:38; 22:47; 22:56; 23:05; 23:15; 23:24; 23:33; 23:42; 23:51; 00:01; 00:10',
            },
            south: {
                workday: '06:02; 06:10; 06:18; 06:26; 06:34; 06:41; 06:48; 06:53; 06:58; 07:03; 07:07; 07:11; 07:15; 07:20; 07:24; 07:29; 07:33; 07:38; 07:42; 07:47; 07:51; 07:56; 08:00; 08:05; 08:09; 08:14; 08:18; 08:23; 08:27; 08:32; 08:36; 08:41; 08:45; 08:50; 08:54; 08:59; 09:03; 09:08; 09:12; 09:17; 09:22; 09:27; 09:32; 09:37; 09:43; 09:49; 09:55; 10:01; 10:07; 10:13; 10:19; 10:25; 10:31; 10:37; 10:43; 10:49; 10:56; 11:03; 11:11; 11:18; 11:26; 11:33; 11:41; 11:48; 11:56; 12:03; 12:11; 12:18; 12:26; 12:33; 12:41; 12:48; 12:56; 13:03; 13:11; 13:18; 13:26; 13:33; 13:41; 13:48; 13:56; 14:03; 14:11; 14:18; 14:26; 14:33; 14:41; 14:48; 14:56; 15:03; 15:11; 15:18; 15:26; 15:33; 15:41; 15:48; 15:56; 16:03; 16:11; 16:18; 16:24; 16:30; 16:35; 16:40; 16:45; 16:51; 16:56; 17:01; 17:06; 17:10; 17:15; 17:19; 17:24; 17:28; 17:33; 17:37; 17:42; 17:46; 17:51; 17:55; 18:00; 18:04; 18:09; 18:13; 18:18; 18:22; 18:27; 18:31; 18:36; 18:40; 18:45; 18:50; 18:55; 19:00; 19:05; 19:10; 19:15; 19:21; 19:27; 19:33; 19:39; 19:46; 19:53; 20:00; 20:07; 20:14; 20:21; 20:28; 20:35; 20:42; 20:51; 21:02; 21:13; 21:24; 21:35; 21:46; 21:57; 22:08; 22:19; 22:30; 22:41; 22:52;  23:03; 23:14; 23:25; 23:36; 23:48, 00:01;  00:15',
                dayOff: '06:02; 06:14; 06:26; 06:38; 06:50; 07:01; 07:12; 07:21; 07:30; 07:40; 07:49; 07:58; 08:07; 08:16; 08:26; 08:35; 08:44; 08:53; 09:02; 09:12; 09:21; 09:30; 09:39; 09:48; 09:58; 10:07; 10:16; 10:25; 10:34; 10:44; 10:53; 11:02; 11:11; 11:20; 11:30; 11:39; 11:48; 11:57; 12:06; 12:16; 12:25; 12:34; 12:43; 12:52; 13:02; 13:11; 13:20; 13:29; 13:38; 13:48; 13:57; 14:06; 14:15; 14:24; 14:34; 14:43; 14:52; 15:01; 15:10; 15:20; 15:29; 15:38; 15:47; 15:56; 16:06; 16:15; 16:24; 16:33; 16:42; 16:52; 17:01; 17:10; 17:19; 17:28; 17:38; 17:47; 17:56; 18:05; 18:14; 18:24; 18:33; 18:42; 18:51; 19:00; 19:10; 19:19; 19:28; 19:37; 19:46; 19:56; 20:05; 20:14; 20:23; 20:32; 20:42; 20:51; 21:00; 21:09; 21:18; 21:28; 21:37; 21:46; 21:55; 22:04; 22:14; 22:23; 22:32; 22:41; 22:50; 23:00; 23:09; 23:18; 23:27; 23:36; 23:46; 23:55; 00:04; 00:15',
            },
        },
    },
    station8: {
        name: 'Чкаловская',
        coords: {
            latitude: 56.808266,
            longitude: 60.609595,
        },
        departures: {
            north: {
                workday: '06:07; 06:15; 06:23; 06:30; 06:38; 06:46; 06:53; 07:00; 07:05; 07:09; 07:14; 07:18; 07:23; 07:27; 07:32; 07:36; 07:41; 07:45; 07:50; 07:54; 07:59; 08:03; 08:08; 08:12; 08:17; 08:21; 08:26; 08:30; 08:35; 08:39; 08:44; 08:48; 08:53; 08:57; 09:02; 09:06; 09:11; 09:15; 09:20; 09:24; 09:29; 09:34; 09:40; 09:45; 09:50; 09:56; 10:02; 10:08; 10:14; 10:20; 10:26; 10:32; 10:38; 10:44; 10:50; 10:56; 11:02; 11:08; 11:14; 11:22; 11:29; 11:37; 11:44; 11:52; 11:59; 12:07; 12:14; 12:22; 12:29; 12:37; 12:44; 12:52; 12:59; 13:07; 13:14; 13:22; 13:29; 13:37; 13:44; 13:52; 13:59; 14:07; 14:14; 14:22; 14:29; 14:37; 14:44; 14:52; 14:59; 15:07; 15:14; 15:22; 15:29; 15:37; 15:44; 15:52; 15:59; 16:07; 16:14; 16:22; 16:29; 16:35; 16:41; 16:47; 16:53; 16:58; 17:03; 17:07; 17:12; 17:17; 17:21; 17:26; 17:30; 17:35; 17:39; 17:44; 17:48; 17:53; 17:57; 18:02; 18:06; 18:11; 18:15; 18:20; 18:24; 18:29; 18:33; 18:38; 18:42; 18:47; 18:52; 18:57; 19:02; 19:07; 19:12; 19:17; 19:22; 19:27; 19:33; 19:39; 19:45; 19:51; 19:58; 20:05; 20:12; 20:19; 20:26; 20;33; 20:40; 20:47; 20:54; 21:02; 21:13; 21:24; 21:35; 21:46; 21:57; 22:08; 22:19; 22:30; 22:41; 22:52;23:03; 23:14; 23:25; 23:37; 23:49; 00:01; 00:12',
                dayOff: '06:01; 06:15; 06:27; 06:39; 06:51; 07:02; 07:13; 07:24; 07:33; 07:42; 07:52; 08:01; 08:10; 08:19; 08:28; 08:38; 08:47; 08:56; 09:05; 09:14; 09:24; 09:33; 09:42; 09:51; 10:00; 10:10; 10:19; 10:28; 10:37; 10:46; 10:56; 11:05; 11:14; 11:23; 11:32; 11:42; 11:51; 12:00; 12:09; 12:18; 12:28; 12:37; 12:46; 12:55; 13:04; 13:14; 13:23; 13:32; 13:41; 13:50; 14:00; 14:09; 14:18; 14:27; 14:36; 14:46; 14:55; 15:04; 15:13; 15:22; 15:32; 15:41; 15:50; 15:59; 16:08; 16:18; 16:27; 16:36; 16:45; 16:54; 17:04; 17:13; 17:22; 17:31; 17:40; 17:50; 17:59; 18:08; 18:17; 18:26; 18:36; 18:45; 18:54; 19:03; 19:12; 19:22; 19:31; 19:40; 19:49; 19:58; 20:08; 20:17; 20:26; 20:35; 20:44; 20:54; 21:03; 21:12; 21:21; 21:30; 21:40; 21:49; 21:58; 22:07; 22:16; 22:26; 22:35; 22:44; 22:53; 23:02; 23:12; 23:21; 23:30; 23:39; 23:48; 23:58; 00:07',
            },
            south: {
                workday: '06:06; 06:14; 06:22; 06:30; 06:38; 06:45; 06:52; 06:57; 07:02; 07:07; 07:11; 07:15; 07:19; 07:24; 07:28; 07:33; 07:37; 07:42; 07:46; 07:51; 07:55; 08:00; 08:04; 08:09; 08:13; 08:18; 08:22; 08:27; 08:31; 08:36; 08:40; 08:45; 08:49; 08:54; 08:58; 09:03; 09:07; 09:12; 09:16; 09:21; 09:26; 09:31; 09:36; 09:41; 09:47; 09:53; 09:59; 10:05; 10:11; 10:17; 10:23; 10:29; 10:35; 10:41; 10:47; 10:53; 11:00; 11:07; 11:15; 11:22; 11:30; 11:37; 11:45; 11:52; 12:00; 12:07; 12:15; 12:22; 12:30; 12:37; 12:45; 12:52; 13:00; 13:07; 13:15; 13:22; 13:30; 13:37; 13:45; 13:52; 14:00; 14:07; 14:15; 14:22; 14:30; 14:37; 14:45; 14:52; 15:00; 15:07; 15:15; 15:22; 15:30; 15:37; 15:45; 15:52; 16:00; 16:07; 16:15; 16:22; 16:28; 16:34; 16:39; 16:44; 16:49; 16:55; 17:00; 17:05; 17:10; 17:14; 17:19; 17:23; 17:28; 17:32; 17:37; 17:41; 17:46; 17:50; 17:55; 17:59; 18:04; 18:08; 18:13; 18:17; 18:22; 18:26; 18:31; 18:35; 18:40; 18:44; 18:49; 18:54; 18:59; 19:04; 19:09; 19:14; 19:19; 19:25; 19:31; 19:37; 19:43; 19:50; 19:57; 20:04; 20:11; 20:18; 20:25; 20:32; 20:39; 20:46; 20:55; 21:06; 21:17; 21:28; 21:39; 21:50; 22:01; 22:12; 22:23; 22:34; 22:45; 22:56; 23:07; 23:18; 23:29; 23:40; 23:52, 00:05;  00:19',
                dayOff: '06:05; 06:17; 06:29; 06:41; 06:53; 07:04; 07:15; 07:24; 07:33; 07:43; 07:52; 08:01; 08:10; 08:19; 08:29; 08:38; 08:47; 08:56; 09:05; 09:15; 09:24; 09:33; 09:42; 09:51; 10:01; 10:10; 10:19; 10:28; 10:37; 10:47; 10:56; 11:05; 11:14; 11:23; 11:33; 11:42; 11:51; 12:00; 12:09; 12:19; 12:28; 12:37; 12:46; 12:55; 13:05; 13:14; 13:23; 13:32; 13:41; 13:51; 14:00; 14:09; 14:18; 14:27; 14:37; 14:46; 14:55; 15:04; 15:13; 15:23; 15:32; 15:41; 15:50; 15:59; 16:09; 16:18; 16:27; 16:36; 16:45; 16:55; 17:04; 17:13; 17:22; 17:31; 17:41; 17:50; 17:59; 18:08; 18:17; 18:27; 18:36; 18:45; 18:54; 19:03; 19:13; 19:22; 19:31; 19:40; 19:49; 19:59; 20:08; 20:17; 20:26; 20:35; 20:45; 20:54; 21:03; 21:12; 21:21; 21:31; 21:40; 21:49; 21:58; 22:07; 22:17; 22:26; 22:35; 22:44; 22:53; 23:03; 23:12; 23:21; 23:30; 23:39; 23:49; 23:58; 00:07; 00:18',
            },
        },
    },
    station9: {
        name: 'Ботаническая',
        coords: {
            latitude: 56.797351,
            longitude: 60.629553,
        },
        departures: {
            north: {
                workday: '06:05; 06:13; 06:21; 06:28; 06:36; 06:44; 06:51; 06:58; 07:03; 07:07; 07:12; 07:16; 07:21; 07:25; 07:30; 07:34; 07:39; 07:43; 07:48; 07:52; 07:57; 08:01; 08:06; 08:10; 08:15; 08:19; 08:24; 08:28; 08:33; 08:37; 08:42; 08:46; 08:51; 08:55; 09:00; 09:04; 09:09; 09:13; 09:18; 09:22; 09:27; 09:32; 09:38; 09:43; 09:48; 09:54; 10:00; 10:06; 10:12; 10:18; 10:24; 10:30; 10:36; 10:42; 10:48; 10:54; 11:00; 11:06; 11:12; 11:20; 11:27; 11:35; 11:42; 11:50; 11:57; 12:05; 12:12; 12:20; 12:27; 12:35; 12:42; 12:50; 12:57; 13:05; 13:12; 13:20; 13:27; 13:35; 13:42; 13:50; 13:57; 14:05; 14:12; 14:20; 14:27; 14:35; 14:42; 14:50; 14:57; 15:05; 15:12; 15:20; 15:27; 15:35; 15:42; 15:50; 15:57; 16:05; 16:12; 16:20; 16:27; 16:33; 16:39; 16:45; 16:51; 16:56; 17:01; 17:05; 17:10; 17:15; 17:19; 17:24; 17:28; 17:33; 17:37; 17:42; 17:46; 17:51; 17:55; 18:00; 18:04; 18:09; 18:13; 18:18; 18:22; 18:27; 18:31; 18:36; 18:40; 18:45; 18:50; 18:55; 19:00; 19:05; 19:10; 19:15; 19:20; 19:25; 19:31; 19:37; 19:43; 19:49; 19:56; 20:03; 20:10; 20:17; 20:24; 20;31; 20:38; 20:45; 20:52; 21:00; 21:11; 21:22; 21:33; 21:44; 21:55; 22:06; 22:17; 22:28; 22:39; 22:50; 23:01; 23:12; 23:23; 23:35; 23:47; 23:59; 00:10',
                dayOff: '05:59; 06:13; 06:25; 06:37; 06:49; 07:00; 07:11; 07:22; 07:31; 07:40; 07:50; 07:59; 08:08; 08:17; 08:26; 08:36; 08:45; 08:54; 09:03; 09:12; 09:22; 09:31; 09:40; 09:49; 09:58; 10:08; 10:17; 10:26; 10:35; 10:44; 10:54; 11:03; 11:12; 11:21; 11:30; 11:40; 11:49; 11:58; 12:07; 12:16; 12:26; 12:35; 12:44; 12:53; 13:02; 13:12; 13:21; 13:30; 13:39; 13:48; 13:58; 14:07; 14:16; 14:25; 14:34; 14:44; 14:53; 15:02; 15:11; 15:20; 15:30; 15:39; 15:48; 15:57; 16:06; 16:16; 16:25; 16:34; 16:43; 16:52; 17:02; 17:11; 17:20; 17:29; 17:38; 17:48; 17:57; 18:06; 18:15; 18:24; 18:34; 18:43; 18:52; 19:01; 19:10; 19:20; 19:29; 19:38; 19:47; 19:56; 20:06; 20:15; 20:24; 20:33; 20:42; 20:52; 21:01; 21:10; 21:19; 21:28; 21:38; 21:47; 21:56; 22:05; 22:14; 22:24; 22:33; 22:42; 22:51; 23:00; 23:10; 23:19; 23:28; 23:37; 23:46; 23:56; 00:05',
            },
            south: null,
        },
    },
};

export const IS_DAY_OFF_URL = 'https://isdayoff.ru/today?tz=Asia/Yekaterinburg';
export const IS_DAY_OFF_TIMEOUT = 10000;
