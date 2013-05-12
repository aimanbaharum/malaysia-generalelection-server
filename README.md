Malaysia Elections Data API
=============================
This serves as a means to provide Open Data access for Malaysia General Election information. Currently, it only serves seats information (both Parliament and State). More information like election results, candidates will be coming soon. Stay tunes.

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
  id: "P4",
  name: "Langkawi",
  geo_lat: "6.323300",
  geo_lng: "99.854721",
  state: [
    {
      id: "N16",
      name: "Ayer Hangat",
      geo_lat: "6.419384",
      geo_lng: "99.808372",
      parliament_id: "P4",
      parliament_name: "Langkawi"
    },
    {
      id: "N17",
      name: "Kuah",
      geo_lat: "6.318623",
      geo_lng: "99.850861",
      parliament_id: "P4",
      parliament_name: "Langkawi"
    }
  ]
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
  parliament_name: "Alor Star",
  parliament_geo_lat: "6.119359",
  parliament_geo_lng: "100.367691"
}
```

Install
-------
1. Required `Node.js` to continue installation. Please download and install [Node.js](http://nodejs.org/) into your system if not exist.
2. Download source from Github with running command `git clone git://github.com/imkven/malaysia-generalelection-server.git`.
3. Move into cloned directory. Normaly, using command `cd malaysia-generalelection-server`.
4. Install grunt using command `npm install grunt-cli -g`.
5. Run command `npm install` to install all dependencies.
6. Enter command `npm start` and try visit `http://127.0.0.1:3000/api/parliament`, you will get all parliaments data.

BDD Test
--------
1. Run command `grunt test` to execute mocha test. 

Status
------
+ Nodejitsu [![Nodejitsu Deploy Status Badges](https://webhooks.nodejitsu.com/shernshiou/malaysia-generalelection-server.png)](https://webops.nodejitsu.com#shernshiou/malaysia-generalelection-server)
+ Travis [![Build Status](https://travis-ci.org/shernshiou/malaysia-generalelection-server.png)](https://travis-ci.org/shernshiou/malaysia-generalelection-server)


Contribute
----------
- Initial parliament and state seats data are contributed by [Kven Ho](https://github.com/imkven).
- Election results contributed by [kiawin](https://github.com/kiawin).
- Election results (2013) contributed by [meeepy](https://www.facebook.com/meeepy).

Contributions and pull requests are welcomed.