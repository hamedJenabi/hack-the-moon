'use client'

import styles from "./AddressInput.module.scss";
import { useEffect, useState, startTransition } from "react";
import Image from "next/image";
import * as Ariakit from "@ariakit/react";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";


export default function AddressInput({ data, action }) {
  const [locations, setLocations] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const onSelectedLocation = async (value) =>{
    console.log("selected: ",value?.mapbox_id);
const retrieveUrl = `https://api.mapbox.com/search/searchbox/v1/retrieve/${value?.mapbox_id}?session_token=0bf6e88b-28b0-4e18-8bbe-c76818011465&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
    await fetch(retrieveUrl).then((response) =>
    response.text()).then((res) => JSON.parse(res))
    .then((locationObject) => {
      console.log("result: ", locationObject);
    }).catch((err) => console.log({ err }));

        }


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
    if (searchValue) fetchLocations();

  }, [searchValue]);

  return (
    <Card className={styles.container}>
      <h1>{data?.question}</h1>
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
                render={<button onClick={() => onSelectedLocation(value)}></button>}
              />
            ))
          ) : (
            <div className={styles.noResults}>No results found</div>
          )}
        </Ariakit.ComboboxPopover>
      </Ariakit.ComboboxProvider>
      <div className={styles.buttonContainer}>
        <Button hideLeft onClick={() => action('datePicker')}>Next</Button>
      </div>
    </Card>
  );
}