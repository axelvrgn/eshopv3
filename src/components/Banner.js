import React from 'react';

const Banner = () => {
    return (
        <div className="bg-cover bg-center h-[320px] flex justify-center items-center bg-[url('https://store.ubi.com/on/demandware.static/-/Library-Sites-shared-library-web/default/dw27e9e8be/images/category-banners/CatBan_new-release-feb22_1920x300_desk.jpg')]">
            <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl font-semibold uppercase ">eshop v3</div>
                <div className="text-lg">Achetez, téléchargez et jouez !</div>
            </div>
        </div>
    );
};

export default Banner;