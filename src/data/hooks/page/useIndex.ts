import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";
import { AxiosError } from "axios";

export function useIndex() {
  const [Pet__List, setPet__List] = useState<Pet[]>([]),
    [Selected__Pet, setSelected__Pet] = useState<Pet | null>(null),
    [email, setEmail] = useState(""),
    [value, setValue] = useState(""),
    [message, setMessage] = useState("");

  useEffect(() => {
    ApiService.get("/pets").then((response) => {
      setPet__List(response.data);
    });
  }, []);
}
