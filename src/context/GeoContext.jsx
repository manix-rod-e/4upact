
import React, { createContext, useContext, useState, useEffect } from 'react';

const GeoContext = createContext();

export const GeoProvider = ({ children }) => {
    const [geo, setGeo] = useState({
        country: null,
        countryCode: null,
        city: null,
        region: null,
        isBrazil: false,
        isLatAm: false,
        isUS: false,
        currency: 'USD',
        currencySymbol: '$',
        loaded: false,
    });

    useEffect(() => {
        const detectGeo = async () => {
            try {
                const res = await fetch('https://ipapi.co/json/');
                const data = await res.json();
                const code = (data.country_code || '').toUpperCase();
                const latamCodes = ['MX', 'AR', 'CO', 'CL', 'PE', 'EC', 'VE', 'UY', 'PY', 'BO', 'CR', 'PA', 'GT', 'HN', 'SV', 'NI', 'DO', 'CU', 'PR'];
                const isBR = code === 'BR';
                const isLATAM = latamCodes.includes(code);
                const isUS = code === 'US';

                setGeo({
                    country: data.country_name,
                    countryCode: code,
                    city: data.city,
                    region: data.region,
                    isBrazil: isBR,
                    isLatAm: isLATAM || isBR,
                    isUS: isUS,
                    currency: isBR ? 'BRL' : 'USD',
                    currencySymbol: isBR ? 'R$' : '$',
                    loaded: true,
                });
            } catch {
                setGeo(prev => ({ ...prev, loaded: true }));
            }
        };
        detectGeo();
    }, []);

    // Currency: geo-detected by default; user can override via toggle
    const [currencyOverride, setCurrencyOverride] = useState(null); // null = use geo
    const pathLocale = window.location.pathname.split('/')[1];
    const isBRL = currencyOverride !== null
        ? currencyOverride === 'BRL'
        : pathLocale === 'pt' || geo.isBrazil;
    const activeCurrency = isBRL ? 'BRL' : 'USD';

    /* ══════════════════════════════════════════════════════════════════════════
       PRICING — currency amounts only (text is handled per-language in pages)
       ══════════════════════════════════════════════════════════════════════════ */
    const pricing = {
        diagnostic: {
            priceValue: 0,
        },
        starter: {
            price: isBRL ? 'R$ 990' : '$197',
            priceValue: isBRL ? 990 : 197,
            period: isBRL ? '/mês' : '/mo',
            popular: false,
        },
        velocity: {
            price: isBRL ? 'R$ 5.090' : '$997',
            priceValue: isBRL ? 5090 : 997,
            period: isBRL ? '/mês' : '/mo',
            popular: true,
        },
        pact: {
            price: isBRL ? 'R$ 10.190' : '$1,997',
            priceValue: isBRL ? 10190 : 1997,
            period: isBRL ? '/mês' : '/mo',
        },
        enterprise: {
            priceValue: null,
        },
    };

    // Key differentiators
    const differentiators = isBRL
        ? [
            { title: 'DNA Fortune 500', desc: '10+ anos liderando marketing na IBM e Intel LatAm — o mesmo rigor aplicado ao seu negócio.' },
            { title: '15X ROI Comprovado', desc: 'ROI de 15X nas primeiras 2 semanas na Azulik Tulum — metodologia testada em escala.' },
            { title: 'IA + Humano', desc: 'Chatbots inteligentes como Lara + estratégia humana de Rod-e — tecnologia com alma.' },
            { title: 'Dashboard Proprietário', desc: '4U Pact Intelligence com 13+ módulos — visibilidade total do negócio em tempo real.' },
          ]
        : [
            { title: 'Fortune 500 DNA', desc: '10+ years leading marketing at IBM & Intel LatAm — the same rigor applied to your business.' },
            { title: 'Proven 15X ROI', desc: '15X ROI in the first 2 weeks at Azulik Tulum — methodology tested at scale.' },
            { title: 'AI + Human', desc: 'Smart chatbots like Lara + Rod-e\'s human strategy — technology with a soul.' },
            { title: 'Proprietary Dashboard', desc: '4U Pact Intelligence with 13+ modules — full business visibility in real time.' },
          ];

    return (
        <GeoContext.Provider value={{
            geo,
            pricing,
            isBRL,
            activeCurrency,
            setCurrencyOverride,
            differentiators,
        }}>
            {children}
        </GeoContext.Provider>
    );
};

export const useGeo = () => useContext(GeoContext);
