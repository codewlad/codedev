export type PostDTO = {
    post_id:      string;
    title:        string;
    intro:        string;
    description:  string;
    callToAction: string;
    images:       Image[];
    video:       string;
    link:         string;
    listOfLinks:  ListOfLinks[];
    credits:      Credits;
    postType:     string;
}

type Image = {
    image: string;
    alt:   string;
}

type ListOfLinks = {
    linkTitle: string;
    linkAddress: string;
}

type Credits = {
    creditsName: string;
	creditsAddress: string;
}