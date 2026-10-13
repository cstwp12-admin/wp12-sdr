# Roadmap

Plan for the WP12 Site Photo Report, from pilot test to use by all CST, WPC and SOR site staff. Dates are targets and may move; changes are noted in the [change log](CHANGELOG.md).

## Pilot and rollout, Oct – Dec 2026

| Phase | Dates | What happens | Moves on when |
|---|---|---|---|
| 1. Preparation | Fri 9 – Mon 12 Oct | v1.2.3 published and checked on iPhone, Android and laptop. Pilot users picked from CST and WPC. Hands-on briefing on Mon 12 Oct; everyone installs the app and makes a test report. | All pilot users have the app and have made a test report |
| 2. Pilot | Tue 13 – Mon 26 Oct (2 weeks) | Pilot users make their daily report in the app and post its PDF in the WhatsApp group, in place of loose photos. RFI photo records from the first day. Mid-pilot check on Mon 19 Oct. Feedback and bugs posted in the existing WP12 RFI coordination WhatsApp group. | Reports on at least 8 of 10 working days per user, no data lost, no bug that stops a report being made |
| 3. Pilot review discussion | Tue 27 Oct (one session) | CST and WPC pilot users go through the feedback and agree what is fixed now and what waits. | List of fixes for v1.3 agreed |
| 4. Fix and improve | Wed 28 Oct – Tue 3 Nov | Fixes made and released as **v1.3**. Activity list and quick guide updated. | v1.3 published |
| 5. Retrial | Wed 4 – Tue 10 Nov (1 week) | Same pilot group on v1.3; each fix confirmed with the person who reported it. Go / no-go meeting on Tue 10 Nov. | No blocking issues open; pilot users agree it is quicker than the old way |
| 6. Full implementation | From Wed 11 Nov | App used by all CST, WPC and SOR site staff. Short briefing for each team. One-month review on Fri 11 Dec. | Then updated as needed, each change with a version number |

## How feedback is handled

| Priority | Meaning | Dealt with |
|---|---|---|
| Must fix | Stops a report being made, loses data, or prints wrong information (chainage, BQ, RFI) | Within 1–2 days during the pilot |
| Should fix | Slows people down or confuses them, but there is a way round it | In v1.3 |
| Later | A new feature or a nice-to-have | Added to the list below |

## Future features under consideration

Features are added only when users ask for them.

| Feature | What it gives | When |
|---|---|---|
| Report type (daily progress, inspection, site observation, site visit) | The PDF title and file name show what the report is for | Soon after go-live |
| Mark-up on photos (arrow, circle, short note) | Points to the defect or item in the photo itself | Soon after go-live |
| Favourite activities per user | The activities a person uses most sit at the top of the list | Soon after go-live |
| Next-day RFI inspection list (experimental in v1.2.3) | WPC prepares the daily RFI summary list in the app (paste from Excel or add one by one) and shares it as a PDF in the Excel list's layout | Feedback from WPC at the pilot review: keep, adjust the format, or remove |
| Shared team register (Google Sheet) | One register for all reports, without collecting CSVs by hand | When a team asks for it |
| Site observation memo | Turns selected photos into a site memo draft with photo attachments | Later |
| Photo map by chainage | Photos for a period on a strip map or map view | Later |
| Period report (experimental in v1.2.4) | One report for a week or month from photos collected over several days: progress table, then photos day by day | Feedback at the pilot review. Next step: compile a period report from several people's daily ZIPs (*report_data.json*) |
| Alignment diagram (experimental in v1.2.3) | A line from the start to the end chainage with the zones, showing where each photo was taken, on the daily report and RFI photo record. Optional structure lines under it (bridges, pipe culverts, box culverts, junction culverts, RS walls), each ticked on its own | Feedback at the pilot review: which structure lines are used |
| Alignment diagram: zoomed detail | A zoomed strip of the day's chainage range so photos close together are shown separately, with the structures in that range named in full | v1.3, if the pilot finds the diagram useful |
| Alignment diagram preview | A small version of the diagram on the report screen, to check markers before sharing | v1.3 |
| Diagram markers coloured by status | e.g. *Rectification required* in red, *Inspected* in green, with a one-line legend | v1.3 |
| Register filter by chainage range or zone | e.g. every photo between CH 70+000 and 71+000 over the pilot weeks | v1.3 |
| Weather by period | Optional time periods beside AM / PM, e.g. *08–10 Fine · 11–14 Heavy rain* | To be discussed at the pilot review |
| Level / layer as its own field | Filter the register by berm level or layer, e.g. every *Berm 3* inspection over a chainage range | After the pilot, if needed |
| Other work packages | A choice of project setups (WP12, WP13, …) from one app | When another package adopts it |
| More photo layouts | *1 per page* (fit to the page) for defects and close-ups, and a *photo log* layout (photo left, caption table right, 3 per page); a choice to show the whole photo or fill the frame | v1.3 |
| Report subject | An optional subject (e.g. *Bored piling*, *Safety observation*) under the title and in the file name, for teams that send separate reports by activity on the same day | v1.3 |
| Location strip (v1.2.5, on by default) | A small line of the whole alignment on each photo with a marker at its chainage. Next step: a zoomed snippet (about ±500 m with nearby structures) | Feedback at the pilot review |
| RFI list line diagram (experimental in v1.2.5) | Inspection locations and times along the alignment above the RFI summary list | Feedback from WPC at the pilot review |
| App name and look | A short app name with a plain descriptor (site photo reports and RFI records), icon and About screen; the web address stays the same | Decided during the pilot, applied in v1.3 for go-live |
