Malaysia Elections Data API
=============================
This serves as a means to provide Open Data access for Malaysia General Election information. Currently, information, it only serves seats information (Parliament and States). More information like election results, candidates will be coming soon. Stay tunes.

API
---
Base URL: `http://malaysia-ge.jitsu.com/api`
### Get Parliament Seats
+ `GET /parliament` will return all parliament seats at Malaysia.

```json
[
  {
      id: "P1",
      name: "Padang Besar",
      geo_lat: "6.656006",
      geo_lng: "100.311325",
      state: "Perlis"
  },
  {
      id: "P2",
      name: "Kangar",
      geo_lat: "6.445515",
      geo_lng: "100.200233",
      state: "Perlis"
  }
]
```

### Get Single Parliament Seat
+  `GET /parliament/:id` will return a single parliament seat based on parliament ID. If id is not found, you'll see `404 Not Found`.

```json
{
  id: "P3",
  name: "Arau",
  geo_lat: "6.414992",
  geo_lng: "100.282341",
  state: "Perlis"
}
```

### Get State Seats
+ `GET /state` will return all state seats at Malaysia.

```json
[
  {
    id: "N1",
    name: "Titi Tinggi",
    geo_lat: "6.641623",
    geo_lng: "100.236183",
    parliament_id: "P1",
    parliament_name: "Padang Besar"
  },
  {
    id: "N2",
    name: "Beseri",
    geo_lat: "6.537106",
    geo_lng: "100.214821",
    parliament_id: "P1",
    parliament_name: "Padang Besar"
  }
]
```

### Get Single State Seats
+  `GET /state/:id` will return a single state seat based on state ID. If id is not found, you'll see `404 Not Found`.

```json
{
  id: "N28",
  name: "Kota Darul Aman",
  geo_lat: "6.130400",
  geo_lng: "100.368050",
  parliament_id: "P9",
  parliament_name: "Alor Star"
}
```

Status
------
+ Nodejitsu [![Nodejitsu Deploy Status Badges](https://webhooks.nodejitsu.com/shernshiou/malaysia-generalelection-server.png)](https://webops.nodejitsu.com#shernshiou/webhooks)
+ Travis [![Build Status](https://travis-ci.org/shernshiou/malaysia-generalelection-server.png)](https://travis-ci.org/shernshiou/malaysia-generalelection-server)


Contribute
----------
Initial parliament and state seats data are contributed by [Kven Ho](https://github.com/imkven).
Contributions and pull requests are welcomed.