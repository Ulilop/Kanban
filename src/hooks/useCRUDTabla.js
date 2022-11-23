import { useEffect, useState } from "react";

const useCRUDTabla = (tabla, id, object, method) => {
  const [needFetch, setNeedFetch] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://localhost:4000/" + tabla + (id ? "/" + id : "");

  useEffect(() => {
    return () => {
      setNeedFetch(true);
    };
  }, [url, method]);

  useEffect(() => {
    if (!needFetch) return;

    const fetchData = async () => {
      const data = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: object ? JSON.stringify(object) : null,
      });
      const json = await data.json();
      setData(json);
      setLoading(false);
    };

    if (["PUT", "DELETE"].includes(method) && !id) {
      setError("No se ha indicado id");
      setLoading(false);
    } else if (["PUT", "POST"].includes(method) && !object) {
      setError("No se ha indicado objeto");
      setLoading(false);
    } else {
      fetchData().catch((error) => {
          setError(error);
          setLoading(false);
      });
    }
  }, [needFetch]);

  return [data, loading, error];
};

export const useUpdateTabla = (tabla, id, object) => {
  return useCRUDTabla(tabla, id, object, "PUT");
};

export const useCreateTabla = (tabla, object) => {
  return useCRUDTabla(tabla, undefined, object, "POST");
};

export const useDeleteTabla = (tabla, id) => {
  return useCRUDTabla(tabla, id, undefined, "DELETE");
};

export const useReadTabla = (tabla, id = undefined) => {
  return useCRUDTabla(tabla, undefined, undefined, "GET");
};

export const useReadIdTabla = (tabla, id = undefined) => {
  return useCRUDTabla(tabla, id, undefined, "GET");
};

export default useCRUDTabla;
