<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>


# stack (Laravel, Inertia & React )

### system requirements

- composer 2.6.5
- nodejs 18


### kredensial 

- email = ``` admin@gmail.com ```
- password = ``` password ```

### Instalasi dan run project

- copy file env menjadi .env
- sesuaikan konfigurasi seperti Database , APP_URL
- pasang modul yang di butuhkan
```sh
$ composer install
$ npm install
```
- jalankan migrasi dan seeding data
```sh
php artisan migrate:fresh --seed
```

- jalankan frontend
```sh
npm run dev
```
- di terminal lain jalankan backend
```sh
php artisan serve
```