import { LoaderFunctionArgs } from "react-router-dom";
import { getRaindrops } from "../../api/queries/getRaindrops";

export default async function getBetterLifeLoader({request}: LoaderFunctionArgs){
	const url = new URL(request.url);
	const page = Number(url.searchParams.get('page') ?? 0);
	const query = url.searchParams.get('q') ?? '';
	const allRaindropsList = await getRaindrops(page, query);
	return {
		allRaindropsList
	};
}
