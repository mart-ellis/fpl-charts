import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from '../lib/fetcher';

const endpoint = 'https://fantasy.premierleague.com/api/bootstrap-static/';

const TeamsList = () => {

    const { data, error } = useSWR(`https://fantasy.premierleague.com/api/bootstrap-static/`, fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return <div>Data loaded {data}</div>
}

export default TeamsList;
