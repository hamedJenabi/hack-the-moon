'use client'

import styles from "./AddressInput.module.scss";
import { useEffect, useState ,startTransition, useMemo,} from "react";
import debounce from 'lodash/debounce';
import Image from "next/image";
import * as Ariakit from "@ariakit/react";


export default function AddressInput() {
    const [locations, setLocations] = useState([]);

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
      const fetchLocations = async () => {
        const url = `https://api.mapbox.com/search/searchbox/v1/suggest?q=${searchValue}&language=de&country=at&types=place&session_token=0bf6e88b-28b0-4e18-8bbe-c76818011465&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;

        await fetch(url).then((response) =>
          response.text()).then((res) => JSON.parse(res))
        .then((json) => {
          setLocations(json?.suggestions?.filter(f => f?.context?.region?.region_code == 4));
        console.log(json.suggestions);
        }).catch((err) => console.log({ err }));
      };
      fetchLocations();
    }, [searchValue]);


    return (
    <main className={styles.main}>
   
      <Ariakit.ComboboxProvider
        setValue={(value) => {
          startTransition(() => setSearchValue(value));
        }} 
      >

        <div className={styles.searchContainer}>
            <Image
              className={styles.searchIcon}
              alt=""
              src={"/SearchOutlined.svg"}
              width={24}
              height={24}
              />
          <Ariakit.Combobox placeholder="Search destination..." className={styles.combobox} />
        </div>
     
        <Ariakit.ComboboxPopover gutter={8} sameWidth className={styles.popover}>
          {locations?.length ? (
            locations?.map((value) => (
              <Ariakit.ComboboxItem
                key={value.name}
                value={value.name}
                className={styles.comboboxItem}
              />
            ))
          ) : (
            <div className={styles.noResults}>No results found</div>
          )}
        </Ariakit.ComboboxPopover>
      </Ariakit.ComboboxProvider>
  
    </main>);
  }