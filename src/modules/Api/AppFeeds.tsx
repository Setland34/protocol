import React from "react";
import { Section } from "../../components/Section";
import { ButtonGroup } from "../../components/ButtonGroup";
import { LinkButton } from "../../components/LinkButton";

export const AppFeeds: React.FC = () => {
	return (
		<Section
			className="border"
			style={{ borderWidth: "1px", borderStyle: "solid", padding: "0px 32px" }}
		>
			<div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "16px",
						flex: 1,
						height: "fit-content",
					}}
				>
					<h2
						style={{
							flex: 1,
							fontWeight: "600",
						}}
					>
						Event{" "}
						<span className="text-alt-color" style={{ fontWeight: 500 }}>
							Interpretation
						</span>
					</h2>
					<p className="text-alt-color">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<ButtonGroup>
						<LinkButton
							href="/docs/interpretation/event-interpretation/guide"
							buttonCopy="Get Started"
						/>
						<LinkButton
							href="/docs/interpretation/event-interpretation/overview"
							buttonCopy="Learn More"
							type="secondary"
						/>
					</ButtonGroup>
				</div>
				<div style={{ flex: 1, textAlign: "center" }}>image</div>
			</div>
		</Section>
	);
};