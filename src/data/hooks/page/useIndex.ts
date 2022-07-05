import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiService";
import { AxiosError } from "axios";

export function useIndex() {
  const [Pet__List, setPet__List] = useState<Pet[]>([]);
}
