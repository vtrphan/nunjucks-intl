NunjucksIntl.__addLocaleData({"locale":"az","pluralRuleFunction":function (n,ord){var s=String(n).split("."),i=s[0],i10=i.slice(-1),i100=i.slice(-2),i1000=i.slice(-3);if(ord)return i10==1||i10==2||i10==5||i10==7||i10==8||(i100==20||i100==50||i100==70||i100==80)?"one":i10==3||i10==4||(i1000==100||i1000==200||i1000==300||i1000==400||i1000==500||i1000==600||i1000==700||i1000==800||i1000==900)?"few":i==0||i10==6||(i100==40||i100==60||i100==90)?"many":"other";return n==1?"one":"other"},"fields":{"year":{"displayName":"İl","relative":{"0":"bu il","1":"gələn il","-1":"keçən il"},"relativeTime":{"future":{"one":"{0} il ərzində","other":"{0} il ərzində"},"past":{"one":"{0} il öncə","other":"{0} il öncə"}}},"month":{"displayName":"Ay","relative":{"0":"bu ay","1":"gələn ay","-1":"keçən ay"},"relativeTime":{"future":{"one":"{0} ay ərzində","other":"{0} ay ərzində"},"past":{"one":"{0} ay öncə","other":"{0} ay öncə"}}},"day":{"displayName":"Gün","relative":{"0":"bu gün","1":"sabah","-1":"dünən"},"relativeTime":{"future":{"one":"{0} gün ərzində","other":"{0} gün ərzində"},"past":{"one":"{0} gün öncə","other":"{0} gün öncə"}}},"hour":{"displayName":"Saat","relativeTime":{"future":{"one":"{0} saat ərzində","other":"{0} saat ərzində"},"past":{"one":"{0} saat öncə","other":"{0} saat öncə"}}},"minute":{"displayName":"Dəqiqə","relativeTime":{"future":{"one":"{0} dəqiqə ərzində","other":"{0} dəqiqə ərzində"},"past":{"one":"{0} dəqiqə öncə","other":"{0} dəqiqə öncə"}}},"second":{"displayName":"Saniyə","relative":{"0":"indi"},"relativeTime":{"future":{"one":"{0} saniyə ərzində","other":"{0} saniyə ərzində"},"past":{"one":"{0} saniyə öncə","other":"{0} saniyə öncə"}}}}});
NunjucksIntl.__addLocaleData({"locale":"az-Cyrl","pluralRuleFunction":function (n,ord){if(ord)return"other";return"other"},"fields":{"year":{"displayName":"Year","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"other":"+{0} y"},"past":{"other":"-{0} y"}}},"month":{"displayName":"Month","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"other":"+{0} m"},"past":{"other":"-{0} m"}}},"day":{"displayName":"Day","relative":{"0":"today","1":"tomorrow","-1":"yesterday"},"relativeTime":{"future":{"other":"+{0} d"},"past":{"other":"-{0} d"}}},"hour":{"displayName":"Hour","relativeTime":{"future":{"other":"+{0} h"},"past":{"other":"-{0} h"}}},"minute":{"displayName":"Minute","relativeTime":{"future":{"other":"+{0} min"},"past":{"other":"-{0} min"}}},"second":{"displayName":"Second","relative":{"0":"now"},"relativeTime":{"future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}}}});
NunjucksIntl.__addLocaleData({"locale":"az-Cyrl-AZ","parentLocale":"az-Cyrl"});
NunjucksIntl.__addLocaleData({"locale":"az-Latn","parentLocale":"az"});
NunjucksIntl.__addLocaleData({"locale":"az-Latn-AZ","parentLocale":"az-Latn"});